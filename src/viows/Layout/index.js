import React from 'react';
import {NavBar,TabBar} from "antd-mobile";
import './index.scss'
const tabArr = [
    {
        title: '所有记录',
        icon: 'iconsuoyou',
        name: 'all',
        url: '/layout'
    },
    {
        title: '已派单',
        icon: 'iconyunliankeji-',
        name: 'repaired',
        url: '/layout/sended'
    },
    {
        title: '已完成',
        icon: 'iconyiwancheng',
        name: 'done',
        url: '/layout/done'
    },
    {
        title: '我的',
        icon: 'iconwode1',
        name: 'customercenter',
        url: '/layout/customercenter'
    }
]
class Layout extends React.Component {
    constructor(props) {
        super(props)
        const setTitle = (isInit=true) => {
            const pathName = props.location.pathname;
            let title = "";
            switch (pathName) {
                case "/layout":
                    title = "所有维修记录";
                    break;
                case "/layout/sended":
                    title = "已派单";
                    break;
                default:
                    title = "维修记录";
            }
            if(isInit){
                this.state = {
                    title,
                    selectedTab: 'all'
                }
            } else {
                this.setState({
                    title
                })
            }
        }
        setTitle()
        this.setTitle = setTitle;
    }
    render() {
        return (
            <div className="layout-container">
                <NavBar mode="dark">{this.state.title}</NavBar>
                {this.props.children}
                <TabBar className="tab-bar"
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                        hidden={this.state.hidden}
                >
                    {
                        tabArr.map((item, index) => (
                            <TabBar.Item title={item.title} key={index}
                                         icon={<i className={'iconfont' + ' ' + item.icon}></i>}
                                         selectedIcon={<i className={'iconfont' + ' ' + item.icon + ' active'}></i>}
                                         selected={this.state.selectedTab === item.name}
                                         onPress={() => {
                                             this.setState({
                                                 selectedTab: item.name
                                             })
                                             this.props.history.push(item.url)
                                         }}
                            />
                        ))
                    }
                </TabBar>
            </div>
        )
    }
    componentWillUpdate (nextProps, nextState) {
        const pathName = nextProps.location.pathname;
        let title = '';
        switch (pathName) {
            case "/layout":
                title = "所有维修记录";
                if(nextState.title === '所有维修记录'){
                    return
                }
                break;
            case "/layout/sended":
                title = "已派单";
                if(nextState.title === '已派单'){
                    return
                }
                break;
            case "/layout/customercenter":
                title = "我的";
                if(nextState.title === '我的'){
                    return
                }
                break;
                case "/layout/done":
                title = "已完成";
                if(nextState.title === '已完成'){
                    return
                }
                break;
        }
        this.setState({
            title
        })
    }
}
export default Layout