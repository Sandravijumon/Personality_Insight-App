import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post( 'http://localhost:8080/login', {email, password})
        .then(result => {
            console.log(result);
            if(result.data === "Success"){
                console.log("Login Success");
                alert('Login successful!')
                navigate('/home');
            }
            else{
                alert("Password and Email ID doesn't match! Please try again.");
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className='login-title'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group text-start">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email Id
                        </label>
                        <input 
                            type="email" 
                            placeholder="Enter Email"
                            className="form-input" 
                            id="exampleInputEmail1" 
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        /> 
                    </div>
                    <div className="form-group text-start">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input 
                            type="password" 
                            placeholder="Enter Password"
                            className="form-input" 
                            id="exampleInputPassword1" 
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
                <p className="login-footer">Don't have an account?</p>
                <Link to='/signup' className="register-btn">SignUp</Link>
                <br></br>
                <br></br>
                <Link to="/">
                <button type="submit" className="login-btn">Go Back</button>
                </Link>
                
            </div>
        </div>
    )
}

export default Login;
