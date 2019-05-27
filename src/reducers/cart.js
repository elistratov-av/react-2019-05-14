export default (cartState = {}, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, name, price } = action.payload;
      const newCartState = {
        ...cartState
      };
      if (cartState[id]) {
        newCartState[id].amount = newCartState[id].amount + 1;
      } else {
        newCartState[id] = {
          id,
          name,
          price,
          amount: 1
        };
      }
      return newCartState;
    }
    case "REMOVE_FROM_CART": {
      const { id } = action.payload;
      const newCartState = {
        ...cartState
      };
      if (cartState[id]) {
        if (cartState[id].amount === 1) delete newCartState[id];
        else newCartState[id].amount = newCartState[id].amount - 1;
      }
      return newCartState;
    }
    case "CLEAR_CART": {
      const id = action.payload.id;
      const newCartState = {
        ...cartState
      };
      if (cartState[id]) {
        delete newCartState[id];
      }
      return newCartState;
    }
    default:
      return cartState;
  }
};
