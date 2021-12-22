using System.Collections.Generic;
using System.Threading.Tasks;
using Infrastructure.ProductEntities;

namespace Infrastructure.Interface
{
    public interface IGenericRepository<T> where T : ProductBaseEntity
    {
        Task<T> GetByIdAsync(int id);
        Task<IReadOnlyList<T>> ListAllAsync();

    }
}