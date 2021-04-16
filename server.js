const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db/db.config')

//use middleware
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
   res.send('I am home page')
})
//import router
const foodRouter = require('./routes/foodRoute');

//use router
app.use('/food-items', foodRouter)



const port = process.env.PORT || 4000;
app.listen(port, () => {
   connectDB();
   console.log(`Server is running on ${port}`)
})


