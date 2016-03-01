import { combineReducers } from 'redux';
import BooksReducer from './reducers_books';
import ChicosReducer from './reducers_chicos';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  chicos: ChicosReducer,
  activeBook: ActiveBook

});

export default rootReducer;
