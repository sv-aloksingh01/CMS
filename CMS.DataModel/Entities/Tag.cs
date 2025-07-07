using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CMS.DataModel.Entities;

[Index("Name", Name = "UQ__Tags__737584F6E3247FBE", IsUnique = true)]
[Index("Slug", Name = "UQ__Tags__BC7B5FB6B802A4AC", IsUnique = true)]
public partial class Tag
{
    [Key]
    public int Id { get; set; }

    [StringLength(100)]
    public string Name { get; set; } = null!;

    [StringLength(100)]
    public string Slug { get; set; } = null!;

    [InverseProperty("Tag")]
    public virtual ICollection<ArticleTag> ArticleTags { get; set; } = new List<ArticleTag>();
}
