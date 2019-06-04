import { createSelector } from "reselect";
// import AverageRating from "../components/average-rating";

export const idSelector = (_, ownProps) => ownProps.id;
export const cartSelector = state => state.cart;
export const restaurantsSelector = state => state.restaurants;
export const dishesSelector = state => state.dishes;
export const reviewsSelector = state => state.reviews;
export const usersSelector = state => state.users;
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
  usersSelector,
  (restaurant, reviews, users) => {
    reviews = restaurant.reviews.map(id => {
      let r = reviews[id];
      if (r && r.userId) {
        let u = users[r.userId];
        r.user = u && u.name;
      }
      return {
        id: r.id,
        text: r.text,
        rating: r.rating,
        user: r.user
      };
    });
    return { reviews };
  }
);
