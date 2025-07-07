using CMS.API.Validators;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Mvc;

namespace CMS.API.Extensions
{
    public static class ValidationExtension
    {
        public static IServiceCollection AddCustomValidation(this IServiceCollection services)
        {
            services.AddControllers()
                .AddFluentValidation(fv =>
                {
                    fv.RegisterValidatorsFromAssemblyContaining<CreateArticleRequestValidator>();
                    fv.RegisterValidatorsFromAssemblyContaining<UpdateArticleRequestValidator>();
                    fv.RegisterValidatorsFromAssemblyContaining<LoginRequestValidator>();
                });

            services.Configure<ApiBehaviorOptions>(options =>
            {
                options.InvalidModelStateResponseFactory = context =>
                {
                    var errors = context.ModelState
                        .Where(x => x.Value.Errors.Count > 0)
                        .Select(x => new
                        {
                            Field = x.Key,
                            Errors = x.Value.Errors.Select(e => e.ErrorMessage)
                        });

                    return new BadRequestObjectResult(new
                    {
                        Message = "Validation Failed",
                        Errors = errors
                    });
                };
            });

            return services;
        }
    }
}
