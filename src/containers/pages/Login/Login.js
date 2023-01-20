import React, { useState, Fragment, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';

const Login = (props) => {
    const pwRef = useRef();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleUsername = e => setUsername(e.target.value);

    const handlePassword = e => setPassword(e.target.value);

    const handleToggle = () => {
        pwRef.current.type === "text" ?
        pwRef.current.type = "password" :
        pwRef.current.type = "text";
    }
    
    const handleLogin = () => {
        const data = {
            name: username,
            password: password
        }
        Axios.post('http://localhost:8888/user/login', data)
            .then(res => {
                res.data.length === 1 ? 
                props.history.push('/dashboard') :
                alert('Wrong Password');
                setUsername('');
                setPassword('');
            })
            .catch(err => console.log(err))
    }
    return (
        <Fragment>
            <Form autoComplete="off">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" value={username} onChange={handleUsername}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={pwRef} placeholder="Enter Password" value={password} onChange={handlePassword}/>
                </Form.Group>
                    <Button type="button" onClick={handleToggle
                    }>Toggle</Button>
                    <Button type="button" onClick={handleLogin
                    }>Login</Button>
            </Form>
        </Fragment>
    )
}

export default Login;
