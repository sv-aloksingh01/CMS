using CMS.DTOs;
using CMS.DataModel;
using CMS.DataModel.Entities;
using CMS.Service.Interfaces;
using Microsoft.EntityFrameworkCore;
using Azure.Core;

namespace CMS.Service.Services
{
    public class ArticleService : IArticleService
    {
        private readonly CMSContext _context;

        public ArticleService(CMSContext context)
        {
            _context = context;
        }

        public async Task<List<ArticleResponseDto>> GetAllAsync(string? category)
        {
            var query = _context.Articles
                .Where(a => a.IsActive)
                .Include(a => a.Category)
                .Include(a => a.ArticleTags)
                    .ThenInclude(at => at.Tag)
                .AsQueryable();

            if (!string.IsNullOrEmpty(category))
            {
                query = query.Where(a => a.Category.Name == category);
            }

            return await query
                .Select(a => new ArticleResponseDto
                {
                    Id = a.Id,
                    Title = a.Title,
                    Content = a.Content,
                    CategoryName = a.Category.Name,
                    Tags = a.ArticleTags.Select(at => at.Tag.Name).ToList(),
                    CreatedAt = a.CreatedAt
                })
                .ToListAsync();
        }


        public async Task<ArticleResponseDto?> GetByIdAsync(int id)
        {
            var article = await _context.Articles
                .Include(a => a.Category)
                .Include(a => a.ArticleTags)
                    .ThenInclude(at => at.Tag)
                .FirstOrDefaultAsync(a => a.Id == id && a.IsActive);

            if (article == null) return null;

            return new ArticleResponseDto
            {
                Id = article.Id,
                Title = article.Title,
                Content = article.Content,
                CategoryName = article.Category.Name,
                Tags = article.ArticleTags.Select(at => at.Tag.Name).ToList(),
                CreatedAt = article.CreatedAt
            };
        }

        public async Task<int> CreateAsync(CreateArticleRequestDto request)
        {
            var category = await _context.Categories
                .FirstOrDefaultAsync(c => c.Name.ToLower() == request.CategoryName.ToLower());

            if (category == null)
                throw new Exception("Invalid category");

            var article = new Article
            {
                Title = request.Title,
                Content = request.Content,
                CategoryId = category.Id,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
                IsPublished = false,
                IsActive = true,
                Slug = GenerateSlug(request.Title) // internal use
            };

            _context.Articles.Add(article);
            await _context.SaveChangesAsync();

            if (request.TagNames?.Any() == true)
            {
                var tagIds = await _context.Tags
                    .Where(t => request.TagNames.Contains(t.Name))
                    .Select(t => t.Id)
                    .ToListAsync();

                var articleTags = tagIds.Select(tagId => new ArticleTag
                {
                    ArticleId = article.Id,
                    TagId = tagId
                });

                await _context.ArticleTags.AddRangeAsync(articleTags);
                await _context.SaveChangesAsync();
            }

            return article.Id;
        }

        public async Task<bool> UpdateArticleAsync(int id, UpdateArticleRequestDto request)
        {
            var article = await _context.Articles
                .Include(a => a.ArticleTags)
                .FirstOrDefaultAsync(a => a.Id == id && a.IsActive);

            if (article == null)
                return false;

            // 🔄 Get category by name (case-insensitive)
            var category = await _context.Categories
                .FirstOrDefaultAsync(c => c.Name.ToLower() == request.CategoryName.ToLower());

            if (category == null)
                throw new Exception("Invalid category name");

            // 🔁 Update article fields
            article.Title = request.Title;
            article.Content = request.Content;
            article.CategoryId = category.Id;
            article.Slug = GenerateSlug(request.Title); // Optional
            article.UpdatedAt = DateTime.UtcNow;

            // 🔄 Remove old tags
            _context.ArticleTags.RemoveRange(article.ArticleTags);

            // 🔄 Add new tags if any
            if (request.TagNames != null && request.TagNames.Any())
            {
                var tagIds = await _context.Tags
                    .Where(t => request.TagNames.Contains(t.Name))
                    .Select(t => t.Id)
                    .ToListAsync();

                article.ArticleTags = tagIds.Select(tagId => new ArticleTag
                {
                    ArticleId = id,
                    TagId = tagId,
                    CreatedAt = DateTime.UtcNow
                }).ToList();
            }

            await _context.SaveChangesAsync();
            return true;
        }


        public async Task<bool> DeleteArticleAsync(int id)
        {
            var article = await _context.Articles.FirstOrDefaultAsync(f => f.Id == id && f.IsActive);
            if (article == null)
                return false;

            article.IsActive = false;
            article.UpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync();
            return true;
        }

        private string GenerateSlug(string input)
        {
            return input.ToLower()
                .Replace(" ", "-")
                .Replace(".", "")
                .Replace(",", "")
                .Replace(":", "")
                .Replace("?", "")
                .Replace("/", "")
                .Trim();
        }

    }
}
