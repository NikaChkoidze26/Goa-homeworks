const customerOrders = [
    {
      orderId: 1,
      isDelivered: true,
      items: [
        { title: "Book A", price: 12, quantity: 1 },
        { title: "Book B", price: 15, quantity: 1 }
      ]
    },
    {
      orderId: 2,
      isDelivered: false,
      items: [
        { title: "Book C", price: 8, quantity: 2 }
      ]
    }
  ];
  
  // 6
  const allOrdersHaveItems = customerOrders.every(order => order.items.length > 0);
  console.log(allOrdersHaveItems); 
  
  // 7
  const hasPendingDelivery = customerOrders.some(order => !order.isDelivered);
  console.log(hasPendingDelivery); 
  
  // 8–10
  customerOrders.forEach(order => {
    console.log(`Processing Order ID: ${order.orderId}`);
  
    order.items.forEach(item => {
      console.log(` - ${item.title} (Quantity: ${item.quantity})`);
    });
  
    const allExpensive = order.items.every(item => item.price > 10);
    console.log(`Order ${order.orderId} contains only expensive books: ${allExpensive}`);
  
    const hasMultipleCopies = order.items.some(item => item.quantity > 1);
    console.log(`Order ${order.orderId} has multiple copies of at least one book: ${hasMultipleCopies}`);
  });
  