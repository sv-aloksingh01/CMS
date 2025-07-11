using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CMS.DataModel.Entities;

[Index("Slug", Name = "UQ__Articles__BC7B5FB6C10C4C73", IsUnique = true)]
public partial class Article
{
    [Key]
    public int Id { get; set; }

    [StringLength(255)]
    public string Title { get; set; } = null!;

    [StringLength(255)]
    public string Slug { get; set; } = null!;

    [Column(TypeName = "text")]
    public string Content { get; set; } = null!;

    [StringLength(500)]
    public string? Excerpt { get; set; }

    [StringLength(100)]
    public string? AuthorName { get; set; }

    public int CategoryId { get; set; }

    public bool? IsPublished { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? PublishedAt { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? CreatedAt { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? UpdatedAt { get; set; }

    [StringLength(500)]
    public string? CoverImageUrl { get; set; }

    public int? ReadTime { get; set; }

    [StringLength(255)]
    public string? MetaTitle { get; set; }

    [StringLength(500)]
    public string? MetaDescription { get; set; }

    [InverseProperty("Article")]
    public virtual ICollection<ArticleTag> ArticleTags { get; set; } = new List<ArticleTag>();

    [ForeignKey("CategoryId")]
    [InverseProperty("Articles")]
    public virtual Category Category { get; set; } = null!;
    public bool IsActive { get; set; }
    public bool IsTrending { get; set; }
}
