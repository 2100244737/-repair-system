import React from 'react';
import Cell from '~/components/Cell'
import $axios from '~/utils'
import './index.css'
class AllRecord extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr:[]
        }
    }
    getData = () => {
        $axios.get('/admin/repairRecord').then(res => {
            this.setState({
                arr: res.data
            })
        })
    }
    componentWillMount() {
        this.getData()
    }
    render() {
        const arr = this.state.arr
        return (
            <div className="all-record">
                {
                    arr.map((item, index) => {
                        return <Cell date={item.update_time}
                                     status={item.status}
                            title={item.title} key={index} />
                    })
                }
            </div>
        )
    }
}
export default AllRecord