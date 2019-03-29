import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "antd/dist/antd.css";
// import App from './App';
// import { HashRouter as Router} from "react-router-dom";
// import CustomLink from './containers/CustomLink';
// import AuthExample from './auth/AuthExample';
import Counter from './Counter';
import Todolist from './Todolist';

ReactDOM.render(<div>
    <Counter />
    <Todolist />
  </div>, document.getElementById('root'));

// ReactDOM.render(
//     <AuthExample/>,
//     document.getElementById('root')
// )

// ReactDOM.render(
//     <CustomLink/>,
//     document.getElementById('root')
// )

// ReactDOM.render(
//     <Router>
//         <App />
//     </Router>,
//     document.getElementById('root')
// )

