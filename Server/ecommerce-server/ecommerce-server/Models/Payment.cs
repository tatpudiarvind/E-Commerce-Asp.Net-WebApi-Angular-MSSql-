using System;
using System.Collections.Generic;

namespace ecommerce_server.Models;

public partial class Payment
{
    public int PaymentId { get; set; }

    public int? OrderId { get; set; }

    public int? CustomerId { get; set; }

    public DateOnly DateOfPayment { get; set; }

    public string? PaymentMode { get; set; }

    public virtual Customer? Customer { get; set; }

    public virtual Order? Order { get; set; }
}
