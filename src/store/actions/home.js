import {ADD,GET_HOME_INFO} from '../constants'
export const add=(count)=>({type: ADD, count,})

export const getHomeInfo=()=>async(dispatch,getState)=>{
  let {name,age}=getState().HomeReducer.homeInfo;
  if(name || age)return
  //上面的return是已有内容就不重复获取，实际项目中不是很灵活，建议参考页面组件里面用window.__INITIAL_STATE__判断
  console.log('footer'.includes('foo'))
  await new Promise(resolve=>{
    let homeInfo={name:'wd2010',age:'25'}
    console.log('-----------请求getHomeInfo')
    setTimeout(()=>resolve(homeInfo),1000)
  }).then(homeInfo=>{
    dispatch({type:GET_HOME_INFO,data:{homeInfo}})
  })
}
