import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewEmployees.css';  // Create and import a CSS file for custom styles
import { Link } from 'react-router-dom';

const ViewEmployees = () => {
  const [data, changeData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");  // State for search input

  // Function to delete an employee
  const DeleteUser = (_id) => {
    let input = { "_id": _id };
    axios.post("http://localhost:8080/delete", input).then(
      (response) => {
        if (response.data.status === "success") {
          alert("User Deleted");
          changeData(prevData => prevData.filter(employee => employee._id !== _id));
        } else {
          alert("Error deleting user");
        }
      }
    ).catch().finally();
  };

  // Fetch employee data
  const fetchData = () => {
    axios.get("http://localhost:8080/view").then(
      (response) => {
        changeData(response.data);
      }
    ).catch((error) => {
      console.log(error.message);
    });
  };

  useEffect(() => { fetchData(); }, []);

  // Filter employees based on search term
  const filteredEmployees = data.filter((employee) => {
    return (
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      employee.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.empid.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.phoneno.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="view-employees-container">
      {/* Logout Button */}
      <div className="logout-container">
        <Link to="/adminlogin">
          <button className="btn btn-warning logout-button">Logout</button>
        </Link>  
      </div>

      {/* Table Heading */}
      <h2 className="table-heading">Employee Details</h2>

      {/* Search Bar */}
      <div className="search-bar-container">
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Search by name, designation, email..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}  // Update search term on input change
        />
      </div>

      {/* Employee Table */}
      <div className="table-container">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Employee ID</th>
              <th scope="col">Employee Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Email ID</th>
              <th scope="col">Mobile No</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              filteredEmployees.map((value, index) => (
                <tr key={index}>
                  <td>{value.empid}</td>
                  <td>{value.name}</td>
                  <td>{value.designation}</td>
                  <td>{value.email}</td>
                  <td>{value.phoneno}</td>
                  <td>
                    <button className="btn btn-danger delete-button" onClick={() => { DeleteUser(value._id); }}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewEmployees;


// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';
// // import './ViewEmployees.css';

// // const ViewEmployees = () => {
// //   const [data, changeData] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState("");

// //   // Fetch employee data including personalityPrediction
// //   const fetchData = () => {
// //     axios.get("http://localhost:8080/view").then(
// //       (response) => {
// //         changeData(response.data);
// //       }
// //     ).catch((error) => {
// //       console.log(error.message);
// //     });
// //   };

// //   useEffect(() => { fetchData(); }, []);

// //   // Filter employees based on search term
// //   const filteredEmployees = data.filter((employee) => {
// //     return (
// //       employee.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
// //       employee.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       employee.empid.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       employee.phoneno.toLowerCase().includes(searchTerm.toLowerCase())
// //     );
// //   });

// //   return (
// //     <div className="view-employees-container">
// //       <div className="logout-container">
// //         <Link to="/adminlogin">
// //           <button className="btn btn-warning logout-button">Logout</button>
// //         </Link>  
// //       </div>

// //       <h2 className="table-heading">Employee Details</h2>

// //       <div className="search-bar-container">
// //         <input 
// //           type="text" 
// //           className="search-bar" 
// //           placeholder="Search by name, designation, email..." 
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //         />
// //       </div>

// //       <div className="table-container">
// //         <table className="table table-dark">
// //           <thead>
// //             <tr>
// //               <th scope="col">Employee ID</th>
// //               <th scope="col">Employee Name</th>
// //               <th scope="col">Designation</th>
// //               <th scope="col">Email ID</th>
// //               <th scope="col">Mobile No</th>
// //               <th scope="col">Personality Prediction</th> {/* New column for personality prediction */}
// //               <th scope="col">Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {
// //               filteredEmployees.map((employee, index) => (
// //                 <tr key={index}>
// //                   <td>{employee.empid}</td>
// //                   <td>{employee.name}</td>
// //                   <td>{employee.designation}</td>
// //                   <td>{employee.email}</td>
// //                   <td>{employee.phoneno}</td>
// //                   <td>{employee.personalityPrediction || "N/A"}</td> {/* Display prediction */}
// //                   <td>
// //                     <button className="btn btn-danger delete-button" onClick={() => { DeleteUser(employee._id); }}>Delete</button>
// //                   </td>
// //                 </tr>
// //               ))
// //             }
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ViewEmployees;

// ViewEmployees.js

// ViewEmployees.js


