using System.Runtime.Serialization;

namespace Infrastructure.ProductEntities.OrderAggregate
{
    public enum OrderStatus
    {
        [EnumMember(Value = "Pending")]
       Pending,

       [EnumMember(Value = "Payment Received")]
       PaymentRecevied,

       [EnumMember(Value = "Payment Received")]
       PaymentFailed
    }
}