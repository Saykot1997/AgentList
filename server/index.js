const express = require('express');
const app = express();
const corse = require('cors');
const db = require('./database');
const port = process.env.PORT || 8000;
const env = require('dotenv');
const AuthRout = require('./Routers/AuthRout');
const UserRout = require('./Routers/UserRouter');


// dotenv config
env.config();

// body parser
app.use(express.json());

// database connection
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});

// cors config
app.use(corse({
    origin: '*',
}));

//Enabling CORS

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x - client - key, x - client - token, x - client - secret, Authorization")
//     next();
// });


//get route
app.get('/api/', (req, res) => {
    res.json("hollo world")
});

app.use('/api/auth', AuthRout);
app.use('/api/user', UserRout);

// server listen
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});