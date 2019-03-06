export default class MealsModel {
  constructor() {
    this.meals = [
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

  getMeals() {
    return this.meals;
  }

  createMeal(mealData) {
    const meal = {
      id: this.meals.length + 1,
      name: mealData.name,
      Description: mealData.Description,
      price: mealData.price,
      quantity: mealData.quantity,
    };
    this.meals.push(meal);
    return meal;
  }

  updateMeal(id, mealData) {
    const meal = this.meals.find(ameal => ameal.id === id);
    meal.id = this.meals.length + 1;
    meal.name = mealData.name || meal.name;
    meal.Description = mealData.Description || meal.Description;
    meal.price = mealData.price || meal.price;
    meal.quantity = mealData.quantity || meal.quantity;
    return meal;
  }

  deleteMeal(id) {
    const meal = this.meals.find(ameal => ameal.id === id);

    const mealIndex = this.meals.indexOf(meal);
    this.meals.splice(mealIndex, 1);
    return meal;
  }
}
