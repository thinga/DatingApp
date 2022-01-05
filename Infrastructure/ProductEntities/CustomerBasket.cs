using System.Collections.Generic;

namespace Infrastructure.ProductEntities
{
    public class CustomerBasket
    {
        public CustomerBasket()
        {
        }
        public CustomerBasket(string id)
        {
            Id = id;
            Items = Items;
        }
        public string Id { get; set; }
        public List<BasketItem> Items { get; set; } = new List<BasketItem>();
    }
}