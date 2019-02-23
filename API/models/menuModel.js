export default class MenusModel {
  constructor() {
    this.menu = [
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

  getMenu() {
    return this.menu;
  }

  createMenu(menuData) {
    const menu = {
      id: this.menu.length + 1,
      name: menuData.name,
      Description: menuData.Description,
      price: menuData.price,
      quantity: menuData.quantity,
    };
    this.menu.push(menu);
    return menu;
  }

  updateMenu(id, menuData) {
    const menu = this.menu.find(amenu => amenu.id === id);
    menu.id = this.menu.length + 1;
    menu.name = menuData.name || menu.name;
    menu.price = menuData.price || menu.price;
    menu.quantity = menuData.quantity || menu.quantity;
    return menu;
  }

  deleteMenu(id) {
    const menu = this.menu.find(amenu => amenu.id === id);

    const menuIndex = this.menu.indexOf(menu);
    this.menu.splice(menuIndex, 1);
    return menu;
  }
}
