import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css' // 引入初始样式
import './globalStyle/index.css' // 引入自己的样式
import Router from './router' // 引入路由
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
