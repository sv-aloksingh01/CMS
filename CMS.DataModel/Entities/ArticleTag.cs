using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CMS.DataModel.Entities;

public partial class ArticleTag
{
    [Key]
    public int Id { get; set; }

    public int ArticleId { get; set; }

    public int TagId { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? CreatedAt { get; set; }

    [ForeignKey("ArticleId")]
    [InverseProperty("ArticleTags")]
    public virtual Article Article { get; set; } = null!;

    [ForeignKey("TagId")]
    [InverseProperty("ArticleTags")]
    public virtual Tag Tag { get; set; } = null!;
}
