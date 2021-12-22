using System.Linq;
using Infrastructure.ProductEntities;
using Infrastructure.Specifications;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.ProductData
{
    public class SpecificationEvaluator<TEntity> where TEntity : ProductBaseEntity
    {
        public static IQueryable<TEntity> GetQuery(IQueryable<TEntity> inputQuery,
               ISpecification<TEntity> spec)
        {
            var query = inputQuery;

            if (spec.Criteria != null)
            {
                query = query.Where(spec.Criteria);
            }

            query = spec.Includes.Aggregate(query, (current, include) => current.Include(include));

            return query;

        }

    }
}
