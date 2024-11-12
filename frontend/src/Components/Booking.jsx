import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Booking = () => {
    const [data, setData] = useState({
        empid: "",
        name: "",
        email: "",
        phoneno: "",
        appointmentDate: "",
        appointmentTime: ""
    });

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        axios.post("http://localhost:8080/book", data)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === "success") {
                    alert("SUCCESSFULLY BOOKED");
                } else if (response.data.status === "error" && response.data.message === "Appointment already scheduled for this time slot") {
                    alert("Appointment is already booked for the selected time slot. Please choose a different time.");
                } else {
                    alert("ERROR");
                }
            })
            .catch(error => {
                console.error(error);
                alert("An error occurred");
            });
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <center><h1 style={{ color: 'black' }}>Get My Therapist</h1></center>
                    <div className="col-md-6 offset-md-3">
                        <div className="card" style={{ backgroundColor: '#000' }}> {/* Black background */}
                            <div className="card-body">
                                <div className="form-group mb-3">
                                    <label htmlFor="empid" className="form-label" style={{ color: '#fff' }}>Employee ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name='empid'
                                        value={data.empid}
                                        onChange={inputHandler}
                                        style={{ backgroundColor: '#333', color: '#fff' }}  // Dark input with white text
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="name" className="form-label" style={{ color: '#fff' }}>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name='name'
                                        value={data.name}
                                        onChange={inputHandler}
                                        style={{ backgroundColor: '#333', color: '#fff' }}  // Dark input with white text
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="phoneno" className="form-label" style={{ color: '#fff' }}>Phone No</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name='phoneno'
                                        value={data.phoneno}
                                        onChange={inputHandler}
                                        style={{ backgroundColor: '#333', color: '#fff' }}  // Dark input with white text
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email" className="form-label" style={{ color: '#fff' }}>Email ID</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name='email'
                                        value={data.email}
                                        onChange={inputHandler}
                                        style={{ backgroundColor: '#333', color: '#fff' }}  // Dark input with white text
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="appointmentDate" className="form-label" style={{ color: '#fff' }}>Choose Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name='appointmentDate'
                                        value={data.appointmentDate}
                                        onChange={inputHandler}
                                        style={{ backgroundColor: '#333', color: '#fff' }}  // Dark input with white text
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="appointmentTime" className="form-label" style={{ color: '#fff' }}>Choose Time</label>
                                    <input
                                        type="time"
                                        className="form-control"
                                        name='appointmentTime'
                                        value={data.appointmentTime}
                                        onChange={inputHandler}
                                        style={{ backgroundColor: '#333', color: '#fff' }}  // Dark input with white text
                                    />
                                </div>
                                <center>
                                    <button className="btn btn-primary" onClick={readValue}>BOOK</button>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
