using CMS.DTOs;
using FluentValidation;

namespace CMS.API.Validators
{
    public class UpdateArticleRequestValidator : AbstractValidator<UpdateArticleDto>
    {
        public UpdateArticleRequestValidator()
        {
            RuleFor(x => x.Title)
                .NotEmpty().WithMessage("Title is required.")
                .MaximumLength(255);

            RuleFor(x => x.Content)
                .NotEmpty().WithMessage("Content is required.");

            RuleFor(x => x.CategoryName)
                .NotEmpty().WithMessage("Category is required.");

            RuleForEach(x => x.TagNames)
                .NotEmpty().WithMessage("Tag name cannot be empty.")
                .MaximumLength(100);
        }
    }
}
