import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import  '../../../assets/css/my.scss'
class Home extends Component{
  state={
    hasError:false,
  }

  componentDidMount(){
    console.log(this.props)
    if (window.__INITIAL_STATE__) {
      // 通过这个变量判断是服务端渲染还是开发环境浏览器渲染 避免重复渲染
      // 如果页面两种方式都需要，则不能用此逻辑
      return
    }
    this.props.getHomeInfo()
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });

    // 在这里可以做异常的上报
    console.log('发送错误':error,info)
  }
  render(){
    let {add,count,homeInfo:{name,age}}=this.props;
    return (
      <div>
        <p>{count}</p>
        <p>名字：{name} - 年龄：{age}</p>
        <button style={{backgroundColor:'#eee'}} onClick={()=>add(count+1)}>增加</button>
        <Link to='/user'>User</Link>
      </div>
    )
  }
}

export default Home