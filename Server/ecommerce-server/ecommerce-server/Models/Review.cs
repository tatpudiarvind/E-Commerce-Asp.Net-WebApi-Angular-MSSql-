using System;
using System.Collections.Generic;

namespace ecommerce_server.Models;

public partial class Review
{
    public int ReviewId { get; set; }

    public int? CustomerId { get; set; }

    public int? ProductId { get; set; }

    public int? Ratings { get; set; }

    public string? Description { get; set; }

    public virtual Customer? Customer { get; set; }

    public virtual Product? Product { get; set; }
}
