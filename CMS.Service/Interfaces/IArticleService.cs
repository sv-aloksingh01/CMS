using CMS.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMS.Service.Interfaces
{
    public interface IArticleService
    {
        Task<List<ArticleResponseDto>> GetAllAsync(string? category);
        Task<ArticleResponseDto?> GetByIdAsync(int id);
        Task<int> CreateAsync(CreateArticleRequestDto request);
        Task<bool> UpdateArticleAsync(int id, UpdateArticleRequestDto dto);
        Task<bool> DeleteArticleAsync(int id);
    }
}
