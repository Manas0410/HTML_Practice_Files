const users = [
    {
      id: 1,
      name: "Aman",
      city: "Pune",
    },
    {
      id: 2,
      name: "Rahul",
      city: "Delhi",
    },
    {
      id: 3,
      name: "Abhinav",
      city: "Dehradun",
    },
  ];

  const orders = [
    {
      orderId: 101,
      userId: 1,
      productName: "iPhone 12 Pro",
    },
    {
      orderId: 102,
      userId: 1,
      productName: "iPhone 13 Pro",
    },
    {
      orderId: 103,
      userId: 1,
      productName: "iPhone 14 Pro",
    },
    {
      orderId: 104,
      userId: 2,
      productName: "Samsung S23",
    },
  ];

  const result = [
    {
      userId: 1,
      name: "Aman",
      orders: [
        {
          orderId: 101,
          productName: "iPhone 12 Pro",
        },
        {
          orderId: 102,
          productName: "iPhone 13 Pro",
        },
        {
          orderId: 103,
          productName: "iPhone 14 Pro",
        },
      ],
    },
    {
      userId: 2,
      name: "Rahul",
      orders: [
        {
          orderId: 104,
          productName: "Samsung S23",
        },
      ],
    },
    {
      userId: 3,
      name: "Abhinav",
      orders: [],
    },
  ];

  const myResult = users.map((value) => {
    const orderFilter = orders.filter((Ordervalues)=>value.id === Ordervalues.userId)
    if(orderFilter){
        return orders.map((rtrnval)=>{
          return {userId : rtrnval.userId,
          name1 : value.name,
          orders:[
            {
                orderId:rtrnval.orderId,
                productName:rtrnval.productName
            }
          ]

        } }       
        )
    }
  })
  console.log(myResult)