const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
const cors = require('cors');
const env = require('dotenv');
const AuthRout = require('./Routers/AuthRout');
const UserRout = require('./Routers/UserRouter');


// dotenv config
env.config();

//frontend config
app.use(cors())

// body parser
app.use(express.json());

// databess conection
mongoose.connect('mongodb://localhost:27017/agent_list', { useNewUrlParser: true, useUnifiedTopology: true }, () => { console.log("databess has been conected !") });

//get route
app.get('/', async (req, res) => {
    res.json("hollo world")
});

app.use('/api/auth', AuthRout);
app.use('/api/user', UserRout);

// server listen
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});