using System;
using System.Collections.Generic;

namespace ecommerce_server.Models;

public partial class Product
{
    public int ProductId { get; set; }

    public string ProductName { get; set; } = null!;

    public string? Brand { get; set; }

    public int? CategoryId { get; set; }

    public decimal Mrp { get; set; }

    public int Stock { get; set; }

    public virtual Category? Category { get; set; }

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();

    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();
}
