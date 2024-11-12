import React, { useState } from 'react';
import axios from 'axios';
import styles from './AddEmployee.module.css';  // Assuming CSS module is available
import AdminNavbar from './AdminNavbar';

const AddEmployee = () => {
    const [data, changeData] = useState({
        empid: '', name: '', phoneno: '', email: '', designation: '', dob: '', comname: '', password: ''
    });

    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value });
    };

    // Function to handle adding the employee
    const readValue = (e) => {
        e.preventDefault();  // Prevent page refresh

        // Basic form validation
        if (!data.empid || !data.name || !data.email || !data.designation || !data.dob || !data.password) {
            alert("Please fill out all fields");
            return;
        }

        // Send a POST request to the backend
        axios.post("http://localhost:8080/add", data)
            .then((response) => {
                if (response.data.status === "success") {
                    alert("Employee added successfully");
                } else {
                    alert(response.data.message || "Error adding employee");  // Display backend error message
                }
            })
            .catch((error) => {
                console.error("Error adding employee:", error);
                alert("An error occurred while adding the employee");
            });
    };

    return (
        <div className={styles.container}>
            <AdminNavbar />  {/* Assuming this is your navbar component */}
            <h2>Add Employee</h2>
            <form>
                <input 
                    type="text" 
                    placeholder="Employee ID" 
                    name="empid" 
                    value={data.empid} 
                    onChange={inputHandler} 
                />
                <input 
                    type="text" 
                    placeholder="Name" 
                    name="name" 
                    value={data.name} 
                    onChange={inputHandler} 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    name="email" 
                    value={data.email} 
                    onChange={inputHandler} 
                />
                <input 
                    type="text" 
                    placeholder="Phone No" 
                    name="phoneno" 
                    value={data.phoneno} 
                    onChange={inputHandler} 
                />
                <input 
                    type="text" 
                    placeholder="Designation" 
                    name="designation"  // Fixed typo here
                    value={data.designation} 
                    onChange={inputHandler} 
                />
                <input 
                    type="date" 
                    placeholder="DOB" 
                    name="dob" 
                    value={data.dob} 
                    onChange={inputHandler} 
                />
                <input 
                    type="text" 
                    placeholder="Company Name" 
                    name="comname" 
                    value={data.comname} 
                    onChange={inputHandler} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    value={data.password} 
                    onChange={inputHandler} 
                />
                <button type="submit" onClick={readValue}>Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployee;
