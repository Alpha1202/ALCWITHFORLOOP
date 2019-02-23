export default class OrdersModel {
  constructor() {
    this.order = [
      {
        id: 1, name: 'Beans', Description: 'lorem ipsum', price: 300, quantity: 'large',
      },
      {
        id: 2, name: 'Rice', Description: 'lorem ipsum', price: 300, quantity: 'large',
      },
      {
        id: 3, name: 'Yam', Description: 'lorem ipsum', price: 300, quantity: 'large',
      },
    ];
  }

  getOrders() {
    return this.order;
  }

  createOrder(OrderData) {
    const order = {
      id: this.order.length + 1,
      name: OrderData.name,
      Description: OrderData.Description,
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
    const order = this.order.find(anorder => anorder.id === id);
    order.id = this.order.length + 1;
    order.name = orderData.name || order.name;
    order.price = orderData.price || order.price;
    order.quantity = orderData.quantity || order.quantity;
    return order;
  }

  deleteOrder(id) {
    const order = this.order.find(anorder => anorder.id === id);

    const orderIndex = this.order.indexOf(order);
    this.order.splice(orderIndex, 1);
    return order;
  }
}
