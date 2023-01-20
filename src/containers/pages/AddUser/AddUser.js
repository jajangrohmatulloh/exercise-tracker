import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import method from '../../../services/services'

const AddUser = props => {
    const [username, setUsername] = useState('');

    const handleUsername = e => setUsername(e.target.value);
    const handleSubmit = e => {
        e.preventDefault();
        const data = {username}
        method.post({username})
         .then(res => {
             alert(`${data.username} was added`);
             props.history.push(`/user/add-detail/${username}`)
             setUsername('')
         })
         .catch(err => {
             alert(`Fail to sent the data because
         ${err}`);
         setUsername('')
         })
    }
    
    return (
        <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter New Username" onChange={handleUsername} value={username}/>
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
            </Form>
        )
}

export default AddUser;