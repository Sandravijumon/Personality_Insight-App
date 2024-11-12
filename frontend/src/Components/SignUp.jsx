import React, { useState } from 'react';
import './SignUp.css'; // Importing the CSS
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [empid, setEmp] = useState('');
    const [name, setName] = useState('');
    const [phoneno, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [designation, setDes] = useState('');
    const [dob, setDob] = useState('');
    const [comname, setCom] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpass, setConPwd] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email || !password || !confirmpass) {
            alert("Please fill all required fields.");
            return;
        }
        if (password !== confirmpass) {
            alert("Passwords do not match");
            return;
        }
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phoneno)) {
            alert("Please enter a valid 10-digit phone number");
            return;
        }

        axios.post('http://localhost:8080/signup', {
            empid, name, phoneno, email, designation, dob, comname, password, confirmpass
        })
        .then(result => {
            console.log(result);
            if (result.data === "Already registered") {
                alert("E-mail already registered! Please Login to proceed.");
                navigate('/login');
            } else {
                alert("Registered successfully! Please Login to proceed.");
                navigate('/login');
                setEmp('');
                setName('');
                setPhone('');
                setEmail('');
                setDes('');
                setDob('');
                setCom('');
                setPassword('');
                setConPwd('');
            }
        })
        .catch(err => {
            console.log(err);
            alert("There was an issue with the registration. Please try again later.");
        });
    };

    return (
        <div className="signup-page">
            <div className="card p-4">
                <h3 className="card-title text-center">SignUp</h3>
                <form onSubmit={handleSubmit}>
                    <div className="card-body">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="empid" className="form-label">EMPLOYEE ID</label>
                                <input type="text" className="form-control" id="empid" name="empid" value={empid} onChange={(event) => setEmp(event.target.value)} />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="name" className="form-label">NAME</label>
                                <input type="text" className="form-control" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="phoneno" className="form-label">MOBILE NO</label>
                                <input type="text" className="form-control" id="phoneno" name="phoneno" value={phoneno} onChange={(event) => setPhone(event.target.value)} />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">EMAIL ID</label>
                                <input type="email" className="form-control" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="designation" className="form-label">DESIGNATION</label>
                                <input type="text" className="form-control" id="designation" name="designation" value={designation} onChange={(event) => setDes(event.target.value)} />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="dob" className="form-label">DATE OF BIRTH</label>
                                <input type="date" className="form-control" id="dob" name="dob" value={dob} onChange={(event) => setDob(event.target.value)} />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="comname" className="form-label">COMPANY NAME</label>
                                <input type="text" className="form-control" id="comname" name="comname" value={comname} onChange={(event) => setCom(event.target.value)} />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="password" className="form-label">PASSWORD</label>
                                <input type="password" className="form-control" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                            </div>
                            
                            <div className="col-md-6">
                           <label htmlFor="confirmpass" className="form-label">CONFIRM PASSWORD</label>
                           <input type="password" className="form-control" id="confirmpass" name="confirmpass" value={confirmpass} onChange={(event) => setConPwd(event.target.value)} />
                           </div>

                           <div className="col-12">
                           <button className="btn btn-success w-100" type="submit">SIGNUP</button>
                           </div>

                           <div className="col-12 text-center">
                         <a href="/login" className="btn btn-primary mt-3">LogIn</a>
                         </div>
                         </div>
                        </div>
                        </form>
                        </div>
                        </div>
                        ) };

export default SignUp;