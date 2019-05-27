export const increase = () => ({
  type: "INCREMENT"
});
export const decrease = () => ({
  type: "DECREMENT"
});
export const increaseCart = ({ id, name, price }) => ({
  type: "ADD_TO_CART",
  payload: {
    id,
    name,
    price
  }
});
export const decreaseCart = ({ id, name, price }) => ({
  type: "REMOVE_FROM_CART",
  payload: {
    id,
    name,
    price
  }
});
