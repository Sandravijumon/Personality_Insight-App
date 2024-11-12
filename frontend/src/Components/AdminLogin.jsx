import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LogIn.css'; // Ensure your CSS file is properly linked

const AdminLogin = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:8080/adminlogin', { email, password })
        .then(result => {
            console.log(result);
            if (result.data.status === "Success") {
                alert('Login successful!');
                navigate('/adminhome');
            } else {
                alert("Password and Email ID doesn't match! Please try again.");
            }
        })
        .catch(err => console.log(err));
    };

    return (
        <div className="login-container"> {/* Applying the background GIF from LogIn.css */}
            <div className="login-card"> {/* Glassmorphic effect for the login card */}
                <h2 className="login-title">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
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
                    <div className="form-group">
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
                    <Link to='/view'>
                    <button type="submit" className="login-btn">Login</button>
                    </Link>
                    
                    <Link to='/' className="register-btn">Go Back</Link>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
