import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Appointment.css'; // Import the new CSS file
import { Link } from 'react-router-dom';

const TherapistAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch appointments when the component is mounted
        axios.get('http://localhost:8080/api/appointments')
            .then((response) => {
                if (response.data.status === 'success') {
                    setAppointments(response.data.data);
                } else {
                    console.error('Failed to fetch appointments');
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching appointments:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="appointments-container">
            <div className="logout-container">
        <Link to="/therapistlogin">
          <button className="btn btn-warning logout-button">Logout</button>
        </Link>  
      </div>
            <h2>Appointments</h2>
            {appointments.length === 0 ? (
                <p>No appointments booked yet.</p>
            ) : (
                <table className="appointments-table">
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone No</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment, index) => (
                            <tr key={index}>
                                <td>{appointment.empid}</td>
                                <td>{appointment.name}</td>
                                <td>{appointment.email}</td>
                                <td>{appointment.phoneno}</td>
                                <td>{new Date(appointment.appointmentDate).toLocaleDateString()}</td>
                                <td>{appointment.appointmentTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TherapistAppointments;
