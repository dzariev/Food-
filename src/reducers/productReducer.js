import { INCREMENT_COUNT, DECREMENT_COUNT } from '../actions/productActions';

const initialState = {
  count: 0,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : 0,
      };
    default:
      return state;
  }
};

export default productReducer;
