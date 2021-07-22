import React from 'react';
import axios from 'axios';

import CommentModal from './comment-modal';
import Comment from '../models/Comment'

export default class Comments extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            err: [],
            toLoadData: Comment.model(),
            show: false
        }
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

    render() {
        return (
            <main>
                <CommentModal onClose={() => this.setState({show: false})} show={this.state.show}  data={this.state.toLoadData}/>
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
                                this.state.data.map((item, index) => {
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