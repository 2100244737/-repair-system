import React from 'react';
import './index.scss'
class Center extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="my-center">
               <div className="header">
                   <div className="username">
                       宅猪
                   </div>
                   <div className="avatar">
                       <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2951924714,3607611016&fm=27&gp=0.jpg" alt="头像"/>
                   </div>
               </div>
                <div className="content">
                    <div className="left">
                        <div className="text">
                            待维修
                        </div>
                        <div className="num">
                            2
                        </div>
                    </div>
                    <div className="right">
                        <div className="text">
                           已完成维修
                        </div>
                        <div className="num">
                            2
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Center