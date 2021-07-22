import React from 'react';
import axios from 'axios';
import { InputGroup } from 'react-bootstrap';
import Moment from 'moment';
import FilterData from './filter-data'

class Event extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            eventData: [],
            filterName: "",
            filterArea: ""
        }
        this.getFilteredData = this.getFilteredData.bind(this)
        this.setStates = this.setStates.bind(this)
    }
    componentDidMount() {
        axios.get('http://localhost:5000/event').then(res => {
            this.setState({ eventData: res.data })
        })
    }

    getFilteredData() {
        return this.state.eventData.filter(item => {
            let chosenItem = (this.state.filterArea) ? item[this.state.filterArea].toString() : item["file_name"]
            return chosenItem.toLowerCase().includes(this.state.filterName.toLowerCase())
        })
    }

    setStates(key, value) {
        switch (key) {
            case 'FilterArea':
                this.setState({filterArea: value})
                break;
            case 'FilterName':
                this.setState({filterName: value})
                break;

            default:
                break;
        }
    }

    render() {
        Moment.locale('hu');
        return (
            <main>
                <FilterData
                    data={this.state.eventData}
                    setStates={this.setStates}
                />
                <div className="container-fluid">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>File Name</th>
                                <th>Name</th>
                                <th>Created at</th>
                                <th>Event</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.getFilteredData()
                                    .map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.file_name}</td>
                                                <td>{item.login_name}</td>
                                                <td>
                                                    {Moment(item.timestamp).format('yyyy-MM-DD')}
                                                    <br />
                                                    {Moment(item.timestamp).format('hh:mm:ss')}
                                                </td>
                                                <td>{item.event}</td>
                                            </tr>
                                        )
                                    })
                            }
                        </tbody>
                    </table>
                </div >
            </main>
        )
    }
}

export default Event