import { createSelector } from "reselect";

export const idSelector = (_, ownProps) => ownProps.id;
export const cartSelector = state => state.cart;
export const restaurantsSelector = state => state.restaurants;
export const dishesSelector = state => state.dishes;
export const reviewsSelector = state => state.reviews;
export const restaurantSelector = (_, ownProps) => ownProps;

export const createDishSelector = () =>
  createSelector(
    dishesSelector,
    idSelector,
    (dishes, id) => {
      console.log("dishSelector");
      return dishes.find(dish => dish.id === id);
    }
  );

export const selectAllDishesAndTotalPrice = createSelector(
  cartSelector,
  restaurantsSelector,
  (cart, restaurants) => {
    console.log("selectAllDishesAndTotalPrice");
    let totalPrice = 0;
    const allDishes = restaurants.reduce((dishes, restaurant) => {
      restaurant.menu.forEach(dish => {
        const amount = cart[dish.id];
        if (amount) {
          const totalDishPrice = amount * dish.price;
          totalPrice += totalDishPrice;
          dishes.push({
            ...dish,
            amount,
            totalDishPrice
          });
        }
      });
      return dishes;
    }, []);

    return {
      dishes: allDishes,
      totalPrice
    };
  }
);

export const selectRestaurantReviews = createSelector(
  restaurantSelector,
  reviewsSelector,
  (restaurant, reviews) => {
    console.log("selectRestaurantReviews");
    restaurant.reviews = restaurant.reviews.map(id => reviews[id]);
    return restaurant;
  }
);
