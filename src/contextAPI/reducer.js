export const initialState = {
  basket: [],
  search: "",
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        search: action.search,
      };
    case "ADD_TO_BASKET":
      // logic from adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // logic from removing item from basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // item exists in basket, remove it..
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket`
        );
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
