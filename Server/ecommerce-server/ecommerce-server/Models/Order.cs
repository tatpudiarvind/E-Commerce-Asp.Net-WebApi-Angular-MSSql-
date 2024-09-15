using System;
using System.Collections.Generic;

namespace ecommerce_server.Models;

public partial class Order
{
    public int OrderId { get; set; }

    public int? CustomerId { get; set; }

    public DateOnly OrderDate { get; set; }

    public string OrderStatus { get; set; } = null!;

    public decimal? GrandTotal { get; set; }

    public decimal? ItemsTotal { get; set; }

    public DateOnly? ShippingDate { get; set; }

    public virtual Customer? Customer { get; set; }

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();
}
