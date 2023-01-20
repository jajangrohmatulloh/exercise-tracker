import React, { Component } from 'react';
import method from '../../../services/services';
import { Form, Button } from 'react-bootstrap'
import DatePicker from 'react-datepicker';

class AddUserDetail extends Component {
    state = {
        username: '',
        description: '',
        duration: '',
        date: new Date(),
        users: []
    }
    componentDidMount() {
        
        method.get()
         .then(res => {
             if(res.data.length > 0) {
                this.setState({
                    users: res.data,
                    username: res.data[0].username
                }, () => {
                    if(this.props.match.params.hasOwnProperty('username')) {
                        this.setState({
                            username: this.props.match.params.username
                        })
                    }
                })
            } else {
                alert('Please add a User first');
                window.location.href = '/user/add'
            }
         })
        
    }

    handleUsername = e => 
    this.setState({ username: e.target.value })
        
        

    handleDescription = e => 
    this.setState({ description: e.target.value})

    handleDuration = e => 
            this.setState({ duration: e.target.value})

    handleDate = e => 
    this.setState({ date: e})

    handleSubmit = e => {
        e.preventDefault();

        const description = this.state.description;
        const duration = this.state.duration;
        const date = this.state.date;

        const data = {
            description,
            duration,
            date
        }

        method.put(this.state.username, data)
         .then(() => {
             alert("Success");
             this.setState({
                 username: '',
                 description: '',
                 duration: '',
                 date: new Date()
             })
         })
         .catch(err => alert(`Failed to sent data because
         ${err}`))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Form.Label>Username</Form.Label>
                <Form.Control as="select" value={this.state.username} onChange={this.handleUsername}>
                    {
                        this.state.users.map(user => 
                            <option value={user.username} key={user._id}>
                                {user.username}
                            </option>
                            )
                    }
                    
                </Form.Control>

                <Form.Label className="mt-3">Description</Form.Label>
                <Form.Control type="text" placeholder="Description" required onChange={this.handleDescription} value={this.state.description}/>

                <Form.Label className="mt-3">Duration (in minutes)</Form.Label>
                <Form.Control type="number" placeholder="Duration" required onChange={this.handleDuration} value={this.state.duration}/>
                
                <Form.Label className="mt-3">Date</Form.Label><br />
                <DatePicker
                showPopperArrow={false}
                selected={this.state.date}
                onChange={this.handleDate}
                />
                <br />
                <Button variant="dark" className="mt-3" type="submit">Submit</Button>

            </form>
        )
    }
}

export default AddUserDetail;