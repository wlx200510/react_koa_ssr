import React from 'react';
import Loadable from 'react-loadable';
import homeRouter from '../../pages/home'
import userRouter from '../../pages/user'
// import albumRouter from '../../pages/Album'

const Loading=(props)=>{
  console.log(props)
  return <div>Loading...</div>
}

const routesConfig=[
  homeRouter,
  userRouter,
  // albumRouter
];

export default routesConfig;




