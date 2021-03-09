import { GET_BOOK } from '../Action/Action';

const initialState = {
  books: [],
};

function rootReducer(state = initialState, action) { 
  switch (action.type) {
    case GET_BOOK:
      return {
          ...state,
          bookArray: action.bookArray,      
      };
    default:
      return state;
  }
}

export default rootReducer;