const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const route = require('./Routes/userRoutes')
const cors = require('cors');

const app = express();

// const corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200,
//   };
const corsOptions = {
    origin: (origin, callback) => {
      const allowedOrigins = ['http://localhost:3000'];
      if (allowedOrigins.includes(origin) || !origin) { // Allow requests with no origin (like from curl or Postman)
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    optionsSuccessStatus: 200,
  };
app.use(cors(corsOptions));
app.use(express.json());

app.use(bodyParser.json())
dotenv.config()

const PORT = process.env.PORT ||5000;
const MONGOURL = process.env.MONGO_URL;


// For online

// mongoose.connect(MONGOURL).then(() =>{
//     console.log("Database connected successfully")
//     app.listen(PORT,() => {
//         console.log(`Server is running on Port : ${PORT}`)
//     })
// }).catch((e) => console.log(e))


app.listen(PORT,() => {  // for offline
    console.log(`Server is running on Port : ${PORT}`)
})

app.use('/api/user',route)