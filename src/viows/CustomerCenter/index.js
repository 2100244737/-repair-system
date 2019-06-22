import React from 'react';
import './index.scss'
import Cookies from 'js-cookie'
import $axios from '~/utils'
import {Button} from'antd-mobile'
class Center extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            avatar: '',
            username: '',
            userId: '',
            all: 0,
            repaired: 0
        }
    }
    getUserData = () => {
        // const userJson = Cookies.get('user')
        // const userObj = JSON.parse(userJson)
        // this.setState({
        //     avatar: userObj.avatar,
        //     username: userObj.nickname || userObj.phone,
        //     userId: userObj.id
        // }, () => {
          //this.getRepairData()
        // })
    }
    getRepairData = () => {
        $axios.get('/admin/repairRecord/userRecord',{
            params: {
                userId: this.state.userId
            }
        }).then(res => {
            this.setState({
                all: res.data.all,
                repaired: res.data.repaired
            })
        })
    }
    handleGetOut = () => {
        this.props.history.push('/')
        Cookies.remove('user')
    }
    componentWillMount() {
        this.getUserData()
    }

    render() {
        const {username, avatar,all, repaired} = this.state
        return (
            <div className="my-center">
               <div className="header">
                   <div className="username">
                      {username || '请登录'}
                   </div>
                   <div className="avatar">
                       <img className="avatar-img"  src={avatar || 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2951924714,3607611016&fm=27&gp=0.jpg'} alt="头像"/>
                   </div>
               </div>
                <div className="content">
                    <div className="left">
                        <div className="text">
                            待维修
                        </div>
                        <div className="num">
                            {repaired}
                        </div>
                    </div>
                    <div className="right">
                        <div className="text">
                           已完成维修
                        </div>
                        <div className="num">
                            {all}
                        </div>
                    </div>
                </div>
                <div className="loginOut-btn">
                    <Button onClick={this.handleGetOut} type="warning" size="large">退出登录</Button>
                </div>
            </div>
        )
    }
}
export default Center