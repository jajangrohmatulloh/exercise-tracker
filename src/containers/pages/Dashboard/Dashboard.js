import React, { Component, Fragment } from 'react';
import { Table, Button } from 'react-bootstrap';
import method from '../../../services/services';

class Dashboard extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        method.get()
         .then(res => this.setState({users: res.data}))
         .catch(err => console.log(err))
    }

    handleDelete = e => {
        const confirm = window.confirm('You sure want to delete this one');
        if(confirm === true) {
            method.delete(e.target.dataset.id)
            .then(res => window.location.reload())
            .catch(err => console.log(err))
            
        } else {
            return;
        }
            
    }

    handleUpdate = e => {
        this.props.history.push(`user/add-detail/${e.target.dataset.username}`)
    }
    render() {
        return (
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>No</th>
                    <th>id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    this.state.users.map((user, i) => 
                    <tr>
                            <td>{++i}</td>
                            <td>{user._id}</td>
                        <td>{user.username}</td>
                        {
                        user.hasOwnProperty('detail') && 
                        <Fragment>
                        <td>{user.detail.description}</td>
                        <td>{user.detail.duration}</td>
                        <td>{user.detail.date}</td>
                        </Fragment>
                        }
                        <td>
                            <Button type="button" 
                            onClick={this.handleDelete} 
                            data-id={user._id}>
                                Delete
                            </Button> | &nbsp;
                            <Button type="button"
                             onClick={this.handleUpdate}
                             data-username={user.username}>
                             Update
                             </Button>
                        </td>
                        </tr>
                        )}
                    
                </tbody>
            </Table>
        )
    }
}
export default Dashboard;
