import {combineReducers} from 'redux';
import {HomeReducer} from '../../pages/home/reducer';
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  router:routerReducer,
  HomeReducer
})