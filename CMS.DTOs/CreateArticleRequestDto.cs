using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMS.DTOs
{
    public class CreateArticleRequestDto
    {
        public string Title { get; set; } = null!;
        public string Content { get; set; } = null!;

        public string CategoryName { get; set; } = null!;
        public List<string>? TagNames { get; set; } = new(); // like ["Data Science", "Tutorial"]
        //public string? Slug { get; set; }
    }
}
