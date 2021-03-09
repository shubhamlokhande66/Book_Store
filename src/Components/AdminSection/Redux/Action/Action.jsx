export const GET_BOOK = 'GET_BOOK';


export function GetBook(bookArray) { 
  return { 
    type: GET_BOOK, 
    bookArray: bookArray,
  };
    
}


// export const loadCart = products => ({
//   type: LOAD_CART,
//   payload: products
// });
