import React,{Component} from 'react';
import {Link } from 'react-router-dom';
import '../../../assets/css/index.scss';

class User extends Component {
  handerClick(e) {
    import(/* webpackChunkName: 'Model' */ "../../../components/Model.js").then(
      ({ default: Model }) => {
        console.log("====按需加载Modal");
      }
    );
  }

  render() {
    let { count } = this.props;
    return (
      <div>
        <p>{count}</p>
        <Link to="/">ddsdfd</Link>
        <ul>
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <li key={index}>aabdddb{item}</li>
          ))}
        </ul>
        <button onClick={() => this.handerClick()}>model</button>
      </div>
    );
  }
}

export default User