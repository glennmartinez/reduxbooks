
export function selectBook(book) {
  //select book is an actioncreator, needs to return an action.
  return {
    type: 'BOOK_SELECTED',
    payload: book  
  };

}