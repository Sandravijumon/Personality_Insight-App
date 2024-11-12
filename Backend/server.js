// const cors = require('cors');
// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const FormDataModel = require('./models/User'); // Assuming you have your User model set up
// const axios = require('axios');
// const User = require('./models/User');


// const app = express();
// app.use(express.json()); // Use express's built-in JSON middleware
// app.use(cors());

// mongoose.connect("mongodb+srv://sandravijumon:Sandra_2001@cluster0.g6coklg.mongodb.net/PersonalityDb?retryWrites=true&w=majority&appName=Cluster0")
//     .then(() => console.log("MongoDB connected"))
//     .catch(err => console.log(err));

// //Admin SignUp
// app.post("/adminlogin", (req, res) => {
//     const { email, password } = req.body;
//     if (email === "admin@gmail.com" && password === "123") {
//         return res.json({ status: "Success" });
//     }
//     res.status(401).json({ status: "Invalid credentials" });
// });


// // // Add Employee
// // app.post('/add', (req, res) => {
// //     const employee = new FormDataModel(req.body);
// //     FormDataModel.create(newUser)
// //         .then(result => res.status(201).json({ message: 'Employee added successfully' }))
// //         .catch(err => res.status(500).json({ error: err.message }));
// // });


// // // View all Employees
// // app.get('/view', (req, res) => {
// //     User.find()
// //         .then(employees => res.json(employees))
// //         .catch(err => res.status(500).json({ error: err.message }));
// // });

// // // Search Employee by ID
// // app.get('/search', (req, res) => {
// //     User.findOne({ empid: req.params.empid })
// //         .then(employee => {
// //             if (employee) {
// //                 res.json(employee);
// //             } else {
// //                 res.status(404).json({ message: 'Employee not found' });
// //             }
// //         })
// //         .catch(err => res.status(500).json({ error: err.message }));
// // });

// // // Delete Employee by ID
// // app.delete('/delete', (req, res) => {
// //     User.findOneAndDelete({ empid: req.params.empid })
// //         .then(result => {
// //             if (result) {
// //                 res.json({ message: 'Employee deleted successfully' });
// //             } else {
// //                 res.status(404).json({ message: 'Employee not found' });
// //             }
// //         })
// //         .catch(err => res.status(500).json({ error: err.message }));
// // });



// // Signup Route
// app.post('/signup', (req, res) => {
//     const { email, password, confirmpass } = req.body;

//     if (password !== confirmpass) {
//         return res.json("Passwords do not match");
//     }

//     // Check if the user already exists
//     FormDataModel.findOne({ email: email })
//         .then(user => {
//             if (user) {
//                 res.json("Already registered");
//             } else {
//                 bcrypt.hash(password, 10, (err, hashedPassword) => {
//                     if (err) {
//                         return res.json(err);
//                     }
//                     const newUser = { ...req.body, password: hashedPassword };
//                     FormDataModel.create(newUser)
//                         .then(log_reg_form => res.json(log_reg_form))
//                         .catch(err => res.json(err));
//                 });
//             }
//         })
//         .catch(err => res.json(err));
// });

// // Login Route
// app.post('/login', (req, res) => {
//     const { email, password } = req.body;

//     FormDataModel.findOne({ email: email })
//         .then(user => {
//             if (user) {
//                 bcrypt.compare(password, user.password, (err, isMatch) => {
//                     if (err) {
//                         return res.json(err);
//                     }

//                     if (isMatch) {
//                         res.json("Success");
//                     } else {
//                         res.json("Wrong password");
//                     }
//                 });
//             } else {
//                 res.json("No records found!");
//             }
//         })
//         .catch(err => res.json(err));
// });


// // Prediction Route
// app.post('/predict', async (req, res) => {
//     const personalityFeatures = req.body.Personality; // Expecting 'Personality' array from frontend

//     if (!personalityFeatures || personalityFeatures.length !== 60) {
//         return res.status(400).json({ error: 'Invalid or missing Personality data' });
//     }

//     try {
//         // Send a POST request to the Flask API
//         const flaskResponse = await axios.post('http://localhost:5000/predict', {
//             Personality: personalityFeatures
//         });

//         // Get the prediction from the Flask API response
//         const prediction = flaskResponse.data.prediction;

//         // Log the prediction
//         console.log('Prediction from Flask API:', prediction);

//         // Send the prediction back to the frontend
//         res.json({ prediction });

//     } catch (error) {
//         console.error('Error in Node.js backend while calling Flask API:', error.message);
//         res.status(500).json({ error: 'Prediction failed. Please check the backend logs for more information.' });
//     }
// });



// // Start the server
// app.listen(8080, () => {
//     console.log("Server Started on port 8080");
// });

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const FormDataModel = require('./models/User'); // Assuming you have your User model set up
const axios = require('axios');
const appointmentRoutes = require('./routes/appointmentRoutes');



const app = express();
app.use(express.json()); // Use express's built-in JSON middleware
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb+srv://sandravijumon:Sandra_2001@cluster0.g6coklg.mongodb.net/PersonalityDb?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));


// Admin Login
app.post("/adminlogin", (req, res) => {
    const { email, password } = req.body;
    if (email === "admin@gmail.com" && password === "123") {
        return res.json({ status: "Success" });
    }
    res.status(401).json({ status: "Invalid credentials" });
});

app.post("/therapistlogin", (req, res) => {
    const { email, password } = req.body;
    if (email === "therapist@gmail.com" && password === "123") {
        return res.json({ status: "Success" });
    }
    res.status(401).json({ status: "Invalid credentials" });
});


//Delete Employee
app.post("/delete",(req,res)=>{
    let input=req.body
    FormDataModel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    ).catch(
        (error)=>{
            res.json({"status":"error"})
})
})

//View

// app.get("/view", (req, res) => {
//     FormDataModel.find().then(
//       (data) => {
//         res.json(data); // Now includes personalityPrediction
//       }
//     ).catch(
//       (error) => {
//         res.json(error);
//       }
//     );
//   });
  

app.get("/view",(req,res)=>{
    FormDataModel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})
 

// User Signup Route
app.post('/signup', (req, res) => {
    const { email, password, confirmpass } = req.body;

    if (password !== confirmpass) {
        return res.json("Passwords do not match");
    }

    // Check if the user already exists
    FormDataModel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json("Already registered");
            } else {
                bcrypt.hash(password, 10, (err, hashedPassword) => {
                    if (err) {
                        return res.json(err);
                    }
                    const newUser = { ...req.body, password: hashedPassword };
                    FormDataModel.create(newUser)
                        .then(log_reg_form => res.json(log_reg_form))
                        .catch(err => res.json(err));
                });
            }
        })
        .catch(err => res.json(err));
});

// User Login Route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    FormDataModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) {
                        return res.json(err);
                    }

                    if (isMatch) {
                        res.json("Success");
                    } else {
                        res.json("Wrong password");
                    }
                });
            } else {
                res.json("No records found!");
            }
        })
        .catch(err => res.json(err));
});

// Prediction Route

app.post('/predict', async (req, res) => {
    const personalityFeatures = req.body.Personality; // Expecting 'Personality' array from frontend

    if (!personalityFeatures || personalityFeatures.length !== 60) {
        return res.status(400).json({ error: 'Invalid or missing Personality data' });
    }

    try {
        // Send a POST request to the Flask API
        const flaskResponse = await axios.post('http://localhost:5000/predict', {
            Personality: personalityFeatures
        });

        // Get the prediction from the Flask API response
        const prediction = flaskResponse.data.prediction;

        // Log the prediction
        console.log('Prediction from Flask API:', prediction);

        // Send the prediction back to the frontend
        res.json({ prediction });

    } catch (error) {
        console.error('Error in Node.js backend while calling Flask API:', error.message);
        res.status(500).json({ error: 'Prediction failed. Please check the backend logs for more information.' });
    }
});

// Personality Updation

app.post('/updatePrediction', async (req, res) => {
    const { userId, prediction } = req.body; // Get userId and prediction from the request
  
    try {
      // Find the user by ID and update the personalityPrediction field
      const user = await FormDataModel.findByIdAndUpdate(
        userId,
        { personalityPrediction: prediction },
        { new: true } // Returns the updated document
      );
  
      if (user) {
        res.json({ status: 'success', message: 'Prediction updated successfully' });
      } else {
        res.status(404).json({ status: 'error', message: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error updating prediction' });
    }
  });
  


// Appointment Booking

const Appointment = require('./models/Appointment');  

app.post('/book', async (req, res) => {
    try {
        const { empid, name, email, phoneno, appointmentDate, appointmentTime } = req.body;

        // Check if an appointment already exists for the same date and time
        const existingAppointment = await Appointment.findOne({ appointmentDate, appointmentTime });
        
        if (existingAppointment) {
            return res.json({ status: 'error', message: 'Appointment already scheduled for this time slot' });
        }

        // Create new appointment
        const newAppointment = new Appointment({ empid, name, email, phoneno, appointmentDate, appointmentTime });
        await newAppointment.save();

        return res.json({ status: 'success', message: 'Appointment successfully booked' });
    } catch (error) {
        console.error(error);
        return res.json({ status: 'error', message: 'An error occurred' });
    }
});

//Therapist appoinment viewing route
app.use('/api',appointmentRoutes);

// Start the server
app.listen(8080, () => {
    console.log("Server Started on port 8080");
});
