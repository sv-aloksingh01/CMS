using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMS.DTOs
{
    public class UpdateArticleRequestDto
    {
        public string Title { get; set; } = null!;
        public string Content { get; set; } = null!;
        public string CategoryName { get; set; } = null!;
        public List<string>? TagNames { get; set; } = new();
        //public string? Slug { get; set; }  // slug for SEO, optional 
    }
}
