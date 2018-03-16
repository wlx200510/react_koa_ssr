import {ADD,GET_HOME_INFO} from '../constants'
export const add=(count)=>({type: ADD, count,})

export const getHomeInfo=(sendId=1)=>async(dispatch,getState)=>{
  let {name,age,id}=getState().HomeReducer.homeInfo;
  if (id === sendId) {
    return
  }
  //上面的return是通过对请求id和已有数据的标识性id进行对比校验，避免重复获取数据。
  console.log('footer'.includes('foo'))
  await new Promise(resolve=>{
    let homeInfo={name:'wd2010',age:'25',id:sendId}
    console.log('-----------请求getHomeInfo')
    setTimeout(()=>resolve(homeInfo),1000)
  }).then(homeInfo=>{
    dispatch({type:GET_HOME_INFO,data:{homeInfo}})
  })
}
