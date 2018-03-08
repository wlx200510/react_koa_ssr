import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../../components/Loading'

import {homeThunk} from '../../store/actions/thunk';


const LoadableHome = Loadable({
    loader: () =>import(/* webpackChunkName: 'Home' */'./containers/homeContainer.js'),
    loading: Loading,
});

const HomeRouter = {
    path: '/',
    exact: true,
    component: LoadableHome,
    thunk: homeThunk // 服务端渲染会开启并执行这个action，用于获取页面渲染所需数据
}

export default HomeRouter