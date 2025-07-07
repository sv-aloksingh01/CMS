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
        Task<List<ArticleDto>> GetAllAsync();
        Task<ArticleDto?> GetByIdAsync(int id);
        Task<int> CreateAsync(CreateArticleRequestDto request);
        Task<bool> UpdateArticleAsync(int id, UpdateArticleDto dto);
        Task<bool> DeleteArticleAsync(int id);
    }
}
