import {combineReducers} from 'redux';
import {HomeReducer} from '../../pages/home/reducer';
import { routerReducer } from 'react-router-redux'
// 这里这个Reducer名称对应到全局state的命名空间（如 state.HomeReducer)
export default combineReducers({
  router:routerReducer,
  HomeReducer
})