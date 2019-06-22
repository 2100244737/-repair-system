import React from 'react';
import './Cell.scss'
import PropTypes from 'prop-types'
import moment from 'moment'
class Cell extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    render() {
           const {title, date, status} = this.props
        let getStatusText = (statusNum) => {
            if (statusNum === 1) {
                return "待派单"
            } else if(statusNum === 2) {
                return "维修中"
            } else if(statusNum === 3) {
                return "已完成"
            }
        }
          let getFormDate = (dateString) => {
               return moment(dateString).format("YYYY-MM-DD hh:mm:ss")
          }
        return (
            <div className="cell-wrap">
               <div className="cell-row1">
                   <div className="row-left">
                       <div className="title">
                           {title}
                       </div>
                       <i className="iconfont iconxiayige"></i>
                   </div>
                  <div className="row-right">
                      {getStatusText(status)}
                  </div>
               </div>
                <div className="cell-row2">
                    {getFormDate(date)}
                </div>
            </div>
        )
    }
}
Cell. propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    status:PropTypes.number
}
export default Cell