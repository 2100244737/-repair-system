import React from 'react';
import $axios from '~/utils';
import Cookies from 'js-cookie';
import Cell from '~/components/Cell';


class Sended extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            repairArr: []
        }
    }

    // /admin/repairRecord?page=1&repair_man=5cc6593a8e36905dfdf1a42f&status=2
    componentWillMount () {
        this.getData();
    }

    getData = () => {
        // const userJsonStr = Cookies.get('user');
        // const userObj = JSON.parse(userJsonStr);

        // $axios.get('/admin/repairRecord', {
        //     params: {
        //         repair_man: userObj.id,
        //         status: 2
        //     }
        // }).then(res => {
        //     this.setState({
        //         repairArr: res.data
        //     })
        // })
    }

    render() {
        const {repairArr} = this.state;
        return (
            <div>
                {
                    repairArr.map((item, index) => (
                        <Cell
                            title={item.title}
                            status={item.status}
                            date={item.updateTime}
                            key={index}  />
                    ))
                }
            </div>
        )
    }
}

export default Sended;