using System.Threading.Tasks;
using Infrastructure.Interface;
using Infrastructure.ProductEntities;

namespace Infrastructure.ProductData
{
    public class BasketRepository : IBasketRepository
    {
        Task<bool> IBasketRepository.DeleteBasketAsync(string basketId)
        {
            throw new System.NotImplementedException();
        }

        Task<CustomerBasket> IBasketRepository.GetBasketAsync(string basketId)
        {
            throw new System.NotImplementedException();
        }

        Task<CustomerBasket> IBasketRepository.UpdateBasketAsync(CustomerBasket basket)
        {
            throw new System.NotImplementedException();
        }
    }
}