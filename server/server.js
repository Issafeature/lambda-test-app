// ------ FILE FOR EXPRESS SERVER ------

// Import Express module: 
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

// Import useControllers:
const { verifyUser, createUser } = require('./controllers/userControllers.js');


// const mongoose = require('mongoose');
// const mongooseURI = 'mongodb+srv://marbleJarTeam:ilovemarbles@student-goal-tracker.zh4sx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// mongoose.connect(mongooseURI, {useNewUrlParser: false}, {useUnifiedTopology: true});
// mongoose.connection.once('open', () => console.log('Connected to MarbleJar Database'));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded());


app.get('/', (req, res, next) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.get('/display', (req, res) => {
  
});



//----- GLOBAL ERROR HANDLER -----
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Global error handler identified an error within the middleware',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);  
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

const PORT = 6767;
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));