export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex((basket) => basket.id === action.id);
      let newBakset = [...state.basket];
      if (index >= 0) {
        newBakset.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id : ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBakset,
      };

    default:
      return state;
  }
};

export default reducer;
