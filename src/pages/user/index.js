import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../../components/Loading'

const LoadableUser = Loadable({
  loader: () => import(/* webpackChunkName: 'User' */ "./containers/userContainer.js"),
  loading: Loading
});

const userRouter = {
  path: "/user",
  component: LoadableUser,
  thunk: () => {}
};

export default userRouter