export default class OrdersModel {
  constructor() {
    this.order = [
      {
        id: 1, name: 'Rice', price: 30, quantity: 300,
      },
      {
        id: 2, name: 'Beans', price: 30, quantity: 300,
      },
      {
        id: 3, name: 'Plantain', price: 30, quantity: 300,
      },
      {
        id: 4, name: 'Eba', price: 30, quantity: 300,
      },
      {
        id: 5, name: 'Stew', price: 30, quantity: 300,
      },
    ];
  }

  getOrders() {
    return this.order;
  }

  createOrder(OrderData) {
    const order = {
      id: OrderData.id,
      name: OrderData.name,
      price: OrderData.price,
      quantity: OrderData.quantity,
    };
    this.order.push(order);
    return order;
  }

  getAnOrder(id) {
    const anOrder = this.order.find(order => order.id === id);
    return anOrder;
  }

  updateOrder(id, orderData) {
    const order = this.order.getAnOrder(id);
    const orderIndex = this.order.indexOf(order);
    this.order[orderIndex].id = orderData.id || order.id;
    this.order[orderIndex].name = orderData.name || order.name;
    this.order[orderIndex].price = orderData.price || order.price;
    this.order[orderIndex].quantity = orderData.quantity || order.quantity;
    return this.order[orderIndex];
  }

  deleteOrder(id) {
    this.order.map((order) => {
      if (order.id === id) {
        const anOrder = this.editOrder(id);
        const orderIndex = this.order.indexOf(anOrder);
        this.order.splice(orderIndex, 1);
      }
    });
  }
}

