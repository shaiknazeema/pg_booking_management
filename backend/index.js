const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'react'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

app.get('/main', (req, res) => {
    const sql = 'SELECT * FROM signin';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});



app.post("/main", (req, res) => {
    const { username, email, phone_number, password } = req.body;
    const sql = "INSERT INTO signin (username, email, phone_number, password) VALUES (?, ?, ?, ?)";
    db.query(sql, [username, email, phone_number, password], (err, result) => {
      if (err) throw err;
      res.status(201).send("User registered successfully");
    });
  });
  
app.put('/main/:id', (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    const sql = 'UPDATE signin SET ? WHERE id = ?';
    db.query(sql, [updatedUser, id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.delete('/main/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM signin WHERE id = ?';
    db.query(sql, id, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM signin WHERE email = ? AND password = ?';
    db.query(sql, [email, password], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.status(200).send({ message: "Login successful", user: result[0] });
        } else {
            res.status(401).send({ message: "Invalid email or password" });
        }
    });
});
app.post("/contact", (req, res) => {
    const { username, email, phone_number, city,message } = req.body;
    const sql = "INSERT INTO contact (username, email, phone_number,city, message) VALUES (?, ?, ?, ?,?)";
    db.query(sql, [username, email, phone_number,city, message], (err, result) => {
      if (err) throw err;
      res.status(201).send("contact form has filled");
    });
  });
  const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
        user: 'nazeemashaik118@gmail.com', 
        pass: 'czvm indu abnp jrcj' 
    }
});

app.post('/submit', (req, res) => {
    const { name, email, phoneNumber, roomType } = req.body;

    // Insert form data into the database (optional)
    const sql = "INSERT INTO bookings (name, email, phone_number, room_type) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, phoneNumber, roomType], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Failed to save booking data.');
            return;
        }

        // Send email to the form-filled person
        const mailOptions = {
            from: 'nazeemashaik852@gmail.com', // Sender email
            to: email, // Recipient email
            subject: 'PG Booking Confirmation',
            text: `Dear ${name}, 
            
Thank you for booking a PG. You have selected the room type: ${roomType}. 
We will contact you shortly for further details.

Best regards,
PG Booking Team`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).send('Failed to send confirmation email.');
            } else {
                console.log('Email sent:', info.response);
                res.status(201).send('Booking confirmed and email sent.');
            }
        });
    });
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});