import React from 'react';
import Comments from './comments'
import { Modal, Button } from 'react-bootstrap';

export default class CommentModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mainComment: new Comments().state.toLoadData
        }
    }

    changeOfValue(data, key) {
        switch (key) {
            case 'postId':
                this.setState(prevState => ({
                    mainComment: {
                        ...prevState.mainComment,
                        postId: data
                    }
                }))
                break;
            case 'id':
                this.setState(prevState => ({
                    mainComment: {
                        ...prevState.mainComment,
                        id: data
                    }
                }))
                break;
            case 'name':
                this.setState(prevState => ({
                    mainComment: {
                        ...prevState.mainComment,
                        name: data
                    }
                }))
                break;
            case 'email':
                this.setState(prevState => ({
                    mainComment: {
                        ...prevState.mainComment,
                        email: data
                    }
                }))
                break;
            case 'body':
                this.setState(prevState => ({
                    mainComment: {
                        ...prevState.mainComment,
                        body: data
                    }
                }))
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onClose}>
                <Modal.Dialog>
                    <Modal.Header >
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div>
                            <div><b>Post Id: </b>{this.props.data.postId}</div>
                            <div><b>Id: </b>{this.props.data.id}</div>
                            <div><b>Name: </b>{this.props.data.name}</div>
                            <div><b>Email: </b>{this.props.data.email}</div>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.onClose}>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>

        )
    }
}