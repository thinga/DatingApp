using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Infrastructure.Interfaces;
using Infrastructure.ProductDtos;
using Infrastructure.ProductEntities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.ProductData
{
    public class ProductRepository : IProductRepository
    {
        private readonly StoreContext _context;
        private readonly IMapper _mapper;
        public ProductRepository(StoreContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }
       
        public async Task<ProductToReturnDto> CreateUpdateProduct(ProductToReturnDto productDto)
        {
            Product product = _mapper.Map<ProductToReturnDto, Product>(productDto);

            if (product.Id > 0)
            {
                _context.Products.Update(product);
            }
            else
            {
                _context.Products.Add(product);
            }
            await _context.SaveChangesAsync();
            return _mapper.Map<Product, ProductToReturnDto>(product);
        }

        public async Task<Product> GetProductByIdAsync(int id)
        {
            return await _context.Products
                .Include(p => p.ProductBrand)
                .Include(p => p.ProductType)
                .FirstOrDefaultAsync(p => p.Id == id);
        }
        public async Task<IReadOnlyList<Product>> GetProductsAsync()
        {

            return await _context.Products
               .Include(p => p.ProductBrand)
               .Include(p => p.ProductType)
               .ToListAsync();
        }
        public async Task<IReadOnlyList<ProductBrand>> GetProductsBrandsAsync()
        {
            return await _context.ProductBrands.ToListAsync();
        }
        public async Task<IReadOnlyList<ProductType>> GetProductTypesAsync()
        {
            return await _context.ProductTypes.ToListAsync();
        }
    }
}