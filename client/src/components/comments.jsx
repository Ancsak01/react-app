import React from 'react';
import axios from 'axios';

import CommentModal from './comment-modal';
import Comment from '../models/Comment'
import FilterData from './filter-data'

export default class Comments extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            err: [],
            toLoadData: Comment.model(),
            show: false,
            filterArea: "",
            filterName: ""
        }
        this.getFilteredData = this.getFilteredData.bind(this)
        this.setStates = this.setStates.bind(this)
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments').then(res => {
            this.setState({ data: res.data });
        }).catch(err => {
            this.setState({ err });
        })
    }

    openModal(data) {
        this.setState({ toLoadData: data });
        this.setState({ show: true });
    }

    getFilteredData() {
        return this.state.data.filter(item => {
            let chosenItem = (this.state.filterArea) ? item[this.state.filterArea].toString() : item["id"].toString()
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
        return (
            <main>
                <CommentModal onClose={() => this.setState({ show: false })} show={this.state.show} data={this.state.toLoadData} />
                <FilterData 
                    data={this.state.data}
                    setStates={this.setStates}
                />
                <div className="container-fluid">
                    <table className="table table-responsive" >
                        <thead>
                            <tr>
                                <th>Post Id</th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.getFilteredData().map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.postId}</td>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td><button className="btn btn-success" onClick={() => this.openModal(item)}>Open</button></td>
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