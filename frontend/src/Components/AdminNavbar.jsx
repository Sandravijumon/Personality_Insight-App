import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AdminNavbar.module.css';

const AdminNavbar = () => {
    return (
        <nav className={styles.navbar}>
            <h1>Employee Management</h1>
            <ul>
                <li><Link to="/add">Add Employee</Link></li>
                <li><Link to="/view">View Employees</Link></li>
                <li><Link to="/search">Search Employee</Link></li>
                <li><Link to="/delete">Delete Employee</Link></li>
            </ul>
        </nav>
    );
}

export default AdminNavbar;
