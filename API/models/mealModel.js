export default class MealsModel {
  constructor() {
    this.meals = [
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

  getMeals() {
    return this.meals;
  }

  createMeal(mealData) {
    const meal = {
      id: mealData.id,
      name: mealData.name,
      price: mealData.price,
      quantity: mealData.quantity,
    };
    this.meals.push(meal);
    return meal;
  }

  getAmeal(id) {
    const ameal = this.meals.find(meal => meal.id === id);
    return ameal;
  }

  updateMeal(id, mealData) {
    const meal = this.meals.getAmeal(id);
    const mealIndex = this.meals.indexOf(meal);
    this.meals[mealIndex].id = mealData.id || meal.id;
    this.meals[mealIndex].name = mealData.name || meal.name;
    this.meals[mealIndex].price = mealData.price || meal.price;
    this.meals[mealIndex].quantity = mealData.quantity || meal.quantity;
    return this.meals[mealIndex];
  }

  deleteMeal(id) {
    this.meals.map((meal) => {
      if (meal.id === id) {
        const ameal = this.editMeal(id);
        const mealIndex = this.meals.indexOf(ameal);
        this.meals.splice(mealIndex, 1);
      }
    });
  }
}
