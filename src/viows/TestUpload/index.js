import React from 'react';
import UploadCom from '~/components/Upload'
import './index.scss'
class Upload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imgArr: []
        }
    }
    getUrl = (url) => {
       let arr = [...this.state.imgArr]
        arr.push(url)
        this.setState({
            imgArr: arr
        })
    }
    render() {
        const {imgArr} = this.state
        return (
            <div className="upload-text">
                <div className="imgs">
                    {
                        imgArr.map((item, index) => (
                            <img src={item} className="upload-item" key={index} alt=""/>
                        ))
                    }
                    <UploadCom success={this.getUrl}/>
                </div>
            </div>
        )
    }
}
export default Upload