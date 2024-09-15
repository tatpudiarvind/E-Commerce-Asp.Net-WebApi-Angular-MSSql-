using System;
using System.Collections.Generic;

namespace ecommerce_server.Models;

public partial class Address
{
    public int AddressId { get; set; }

    public int? CustomerId { get; set; }

    public string? City { get; set; }

    public string? State { get; set; }

    public string? StreetName { get; set; }

    public string? Pincode { get; set; }

    public string? DoorNumber { get; set; }

    public string? ApartmentNumber { get; set; }

    public virtual Customer? Customer { get; set; }
}
