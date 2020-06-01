const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },

  set appetizers(appetizersIn) {
    return (this._courses.appetizers = appetizersIn);
  },

  set mains(mainsIn) {
    return (this._courses.mains = mainsIn);
  },

  set desserts(dessertsIn) {
    return (this._courses.desserts = dessertsIn);
  },
  get courser() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your Mel is ${appetizer.name}, ${main.name}, ${dessert.price} an the total price is ${totalPrice}`;
  },
};

menu.addDishToCourse("appetizers", "prueba", 4.25);

menu.addDishToCourse("mains", "No mas", 4.45);

menu.addDishToCourse("desserts", "arroz", 4.75);

let meal = menu.generateRandomMeal();
console.log(meal);
