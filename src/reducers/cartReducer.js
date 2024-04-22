const initialState = {
  items: [],
  count: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'INCREMENT_COUNT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT_COUNT':
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : 0,
      };
    default:
      return state;
  }
};

export default cartReducer;