using System.Collections.Generic;
using System.Threading.Tasks;
using Infrastructure.Interface;
using Infrastructure.ProductEntities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.ProductData
{
    public class GenericRepository<T> : IGenericRepository<T> where T : ProductBaseEntity
    {
        private readonly StoreContext _context;
        public GenericRepository(StoreContext context)
        {
            _context = context;
        }

        public async Task<T> GetByIdAsync(int id)
        {
            return await _context.Set<T>().FindAsync(id);
        }

        public async Task<IReadOnlyList<T>> ListAllAsync()
        {
            return await _context.Set<T>().ToListAsync();
        }
    }
}
