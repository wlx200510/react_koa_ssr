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