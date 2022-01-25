using System.Collections.Generic;
using System.Threading.Tasks;
using Infrastructure.ProductEntities;
using Infrastructure.Specifications;

namespace Infrastructure.Interface
{
    public interface IGenericRepository<T> where T : ProductBaseEntity
    {
        Task<T> GetByIdAsync(int id);
        Task<IReadOnlyList<T>> ListAllAsync();
        Task<T> GetEntityWithSpec(ISpecification<T> spec);
        Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec);
        Task<int> CountAsync(ISpecification<T> spec);
          void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
    }
}