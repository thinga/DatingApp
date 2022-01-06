namespace Infrastructure.ProductEntities.OrderAggregate
{
    public class DeliveryMethod : ProductBaseEntity
    {
        public string Shortname { get; set; }
        public string DeliveryTime { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
    }
}