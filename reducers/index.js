import { combineReducers } from 'redux'
import  articleReducers from './articleReducers';

export const allReducers = combineReducers( {
    articleReducers,
});