using System;
using System.Collections.Generic;

namespace ecommerce_server.Models;

public partial class Seller
{
    public int SellerId { get; set; }

    public string SellerName { get; set; } = null!;

    public string? Phone { get; set; }

    public string? CompanyName { get; set; }

    public decimal? TotalSales { get; set; }
}
