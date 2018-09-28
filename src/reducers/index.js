import { combineReducers } from 'redux';
import NewsReducer from './news_reducer';


const rootReducer = combineReducers({
  news: NewsReducer
});

export default rootReducer;
