import {ADD,GET_HOME_INFO} from '../../../store/constants';

const ACTION_HANDLERS = {
  [ADD]: (state, action) => Object.assign({}, state, { count: action.count }),
  [GET_HOME_INFO]: (state, action) => Object.assign({}, state, action.data)
};

const initialState = {
  count: 33,
  homeInfo: {name: '', age: '', id: ''}
}

export const HomeReducer = function(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}


// export const counter=(state={count:33},action)=>{
//   switch (action.type){
//     case ADD:
//       return Object.assign({},state,{count: action.count});
//     default:
//       return state;
//   }
// }

// export const homeInfo=(state={name:'',age:''},action)=>{
//   switch(action.type){
//     case GET_HOME_INFO:
//       return Object.assign({},state,action.data);
//     default:
//       return state;
//   }
// }