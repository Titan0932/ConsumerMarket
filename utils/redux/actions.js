import { constants } from "./constants";

export const addToCartHandler = (state, dispatch, data) => {
  const existItem = state.cart.cartItems.find(
    (item) => item.slug === data.slug
  );
  data.countInStock= data.countInStock-1
  if (existItem) {
    dispatch({
      type: constants.CART_ADD_ITEM,
      payload: { ...data, quantity: existItem.quantity + 1 },
    });
  } else {
    dispatch({
      type: constants.CART_ADD_ITEM,
      payload: { ...data, quantity: 1 },
    });
  }
};
