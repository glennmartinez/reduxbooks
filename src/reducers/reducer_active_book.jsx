//state arg is not app state only what its responsible for

export default function(state = null, action) {
  
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload; 

  }
 
  return state;
  
}