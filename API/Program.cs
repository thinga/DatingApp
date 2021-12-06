var builder = WebApplication.CreateBuilder(args);

// add services to the container

builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddControllers();
builder.Services.AddCors();
builder.Services.AddIdentityServices(builder.Configuration);
builder.Services.AddSignalR();

// Configure the HTTP request pipeline

var app = builder.Build();

app.UseMiddleware<ExceptionMiddleware>();

app.UseHttpsRedirection();

app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200"));

app.UseAuthentication();
app.UseAuthorization();

app.UseDefaultFiles();
app.UseStaticFiles();

app.MapControllers();


     
           using var scope = app.Services.CreateScope();
           var services = scope.ServiceProvider;

           try
           {
               var context = services.GetRequiredService<DataContext>();
               var userManager = services.GetRequiredService<UserManager<AppUser>>();
               await context.Database.MigrateAsync();
               await Seed.SeedUsers(userManager);
               
           }
           catch(Exception ex)
           {
               var logger = services.GetRequiredService<ILogger<Program>>();
               logger.LogError(ex, "An error occurred during migration");
           }
           await app.RunAsync();
