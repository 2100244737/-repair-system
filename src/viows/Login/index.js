import React from 'react';
import { NavBar, InputItem, Button, Toast} from 'antd-mobile';
import './index.scss'
import {createForm} from 'rc-form' // 引入表单注入插件
import axios from 'axios'
import Cookies from 'js-cookie'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleLogin = () => {
        axios.post('/admin/adminUser/login', this.props.form.getFieldsValue()).then(res => {
            if(res.data.code === 200){
                this.props.history.push('/Layout');
                let userObj = res.data.data;
                console.log(userObj);
                let userJsonStr = JSON.stringify(userObj);
                Cookies.set('user', userJsonStr);
            } else {
                Toast.info(res.data.msg);
            }
        })
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div className='login-container'>
                <NavBar mode="dark">维修员登录</NavBar>
                <div className="input-wrap">
                    <InputItem
                        {...getFieldProps('username')}
                        clear
                        placeholder="请输入用户名"
                    >用户名</InputItem>
                    <InputItem
                        {...getFieldProps('password')}
                        clear
                        type="password"
                        placeholder="请输入密码"
                    >密码</InputItem>
                </div>
                <div className="btn-wrap">
                    <Button
                        type="primary"
                        onClick={this.handleLogin}>登录</Button>
                </div>
            </div>
        )
    }
}
const LoginContain = createForm()(Login)
export default LoginContain