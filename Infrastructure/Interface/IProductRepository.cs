using System.Collections.Generic;
using System.Threading.Tasks;
using Infrastructure.ProductDtos;
using Infrastructure.ProductEntities;

namespace Infrastructure.Interfaces
{
    public interface IProductRepository
    {
        Task<Product> GetProductByIdAsync(int id);
        Task<IReadOnlyList<Product>> GetProductsAsync();
        Task<IReadOnlyList<ProductBrand>> GetProductsBrandsAsync();
        Task<IReadOnlyList<ProductType>> GetProductTypesAsync();
        Task<ProductToReturnDto> CreateUpdateProduct(ProductToReturnDto productDto);
    }
}