import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Leftside.css'
const Leftside = () => {

    const [result, setResult] = useState({});
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const handleLogin = (e) => {
        e.preventDefault();

        axios.post('https://reqres.in/api/login', {
            email: data.email,
            password: data.password
        }).then(res => {
            setResult(res.data);
            console.log(res.data)
        }).catch(err => {
            console.log(err.response.data.error);
        })


    }

    return (
        <div>
            <br />
            <br />
            <br />
            {/* {result.data.token} */}
            <Form onSubmit={(e) => handleLogin(e)} className='form-style'>

                <Form.Group className='my-1'>
                    <h1 style={{ color: "darkblue" }}> <b>Welcome Back</b> </h1>
                    <h6 style={{ color: "darkblue" }}> Sub Title text goes here </h6>
                    <Form.Control name="email" id="email" value={data.email} onChange={(e) => setData(prev => ({ ...prev, email: e.target.value }))} type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group>

                    <Form.Control name="password" onChange={(e) => setData(prev => ({ ...prev, password: e.target.value }))} value={data.password} id="password" type="password" placeholder="Enter your password" />


                    <Button type="submit" style={{ width: "100%", marginTop: "3%", backgroundColor: "darkblue" }}>Login</Button>

                    <div className="remember d-flex justify-content-between">
                        <div className="">
                            <input type="checkbox" name="" id="" />
                            <small>Remember Me</small>
                        </div>
                        <div className="remember" style={{ marginLeft: "123px" }}>
                            <small>Forgot Password</small>
                        </div>
                    </div>

                </Form.Group>

            </Form>

        </div>
    )
}

export default Leftside;