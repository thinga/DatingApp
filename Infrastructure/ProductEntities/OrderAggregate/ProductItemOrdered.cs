namespace Infrastructure.ProductEntities.OrderAggregate
{
    public class ProductItemOrdered
    {
        public ProductItemOrdered()
        {
        }

        public ProductItemOrdered(int productItemId, string productname, string pictureUrl)
        {
            ProductItemId = productItemId;
            Productname = productname;
            PictureUrl = pictureUrl;
        }

        public int ProductItemId { get; set; }
        public string Productname { get; set; }
        public string PictureUrl { get; set; }

    }
}