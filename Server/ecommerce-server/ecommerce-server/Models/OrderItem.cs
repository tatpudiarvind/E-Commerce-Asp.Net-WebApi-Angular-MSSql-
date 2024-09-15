using System;
using System.Collections.Generic;

namespace ecommerce_server.Models;

public partial class OrderItem
{
    public int OrderItemId { get; set; }

    public int? OrderId { get; set; }

    public int? ProductId { get; set; }

    public int Quantity { get; set; }

    public decimal? ItemMrp { get; set; }

    public virtual Order? Order { get; set; }

    public virtual Product? Product { get; set; }
}
