using System;
using System.Threading.Tasks;
using API.Extensions;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;

namespace API.Helpers
{
    public class LogUserActivity : IAsyncActionFilter
    {
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            
           var resultContext = await next();

           var username = resultContext.HttpContext.User.GetUsername();
           if (username == null) return;
           var repo = resultContext.HttpContext.RequestServices.GetService<IUserRepository>();
           if (repo == null) return;
           var user = await repo.GetUserByUsernameAsync(username);
           user.LastActive = DateTime.Now;
           await repo.SaveAllAsync();
        }
    }
}