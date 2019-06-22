import React from 'react';
import './index.scss'
import axios from 'axios';
import PropTypes from 'prop-types'
class Upload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentWillMount() {
        this.getToken()
    }

    getToken = () =>{
         axios.get('http://upload.yaojunrong.com/getToken').then(res => {
             this.token = res.data.data
         })
    }
    handleChange = (e) => {
        const from= new FormData();
        from.append('file', e.target.files[0])
       from.append('token', this.token)
        axios.post('https://upload-z1.qiniup.com', from).then(res => {
            this.props.success(res.data.url)
        })
    }
    render() {
        return (
            <label className="upload-wrap">
                <input type="file" onChange={this.handleChange} className="upload-input"/>
                 <i className="iconfont iconadd"></i>
            </label>
        )
    }
}
Upload.prototypes = {
    success: PropTypes.func
}
export default Upload