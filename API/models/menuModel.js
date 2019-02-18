export default class MenusModel {
  constructor() {
    this.menu = [
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

  getMenu() {
    return this.menu;
  }

  createMenu(menuData) {
    const menu = {
      id: menuData.id,
      name: menuData.name,
      price: menuData.price,
      quantity: menuData.quantity,
    };
    this.menu.push(menu);
    return menu;
  }

  getAmenu(id) {
    const amenu = this.menu.find(menu => menu.id === id);
    return amenu;
  }

  updateMenu(id, menuData) {
    const menu = this.menu.getAmenu(id);
    const menuIndex = this.menu.indexOf(menu);
    this.menu[menuIndex].id = menuData.id || menu.id;
    this.menu[menuIndex].name = menuData.name || menu.name;
    this.menu[menuIndex].price = menuData.price || menu.price;
    this.menu[menuIndex].quantity = menuData.quantity || menu.quantity;
    return this.menu[menuIndex];
  }

  deleteMenu(id) {
    this.menu.map((menu) => {
      if (menu.id === id) {
        const amenu = this.editMenu(id);
        const menuIndex = this.menu.indexOf(amenu);
        this.menu.splice(menuIndex, 1);
      }
    });
  }
}

