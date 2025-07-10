using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMS.DTOs
{
    public class ArticleResponseDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string Content { get; set; } = null!;
        public string CategoryName { get; set; } = null!;
        public List<string> Tags { get; set; } = new();
        public DateTime? CreatedAt { get; set; }
    }
}
