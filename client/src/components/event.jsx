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
    }
    componentDidMount() {
        axios.get('http://localhost:5000/event').then(res => {
            this.setState({ eventData: res.data })
        })
    }
    render() {
        const filteredData = this.state.eventData.filter(item => {
            let chosenItem = (this.state.filterArea) ? item[this.state.filterArea].toString() : item["file_name"]
            if (this.state.filterArea) {
                console.log(item[this.state.filterArea]);
            }
            return chosenItem.toLowerCase().includes(this.state.filterName.toLowerCase())
        })
        const sampleData = this.state.eventData;
        Moment.locale('hu');
        return (
            <main>
                <InputGroup>
                    <select name="filterArea" id="filterArea" onChange={(data) => this.setState({ filterArea: data.target.value })}>
                        {(sampleData[0]) ? Object.keys(sampleData[0]).map((item, index) => {
                            return (
                                <option key={index} value={item}>{item}</option>
                            )
                        }) : null}
                    </select>
                    <input type="text" name="filter" id="filter" placeholder="filter goes here..." onChange={(e) => { this.setState({ filterName: e.target.value }) }} />
                </InputGroup>
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
                                filteredData
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