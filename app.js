const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/dbConfig');

const adminSingupRoutes = require('./views/adminSignup');
const adminLoginRoutes = require('./views/adminSignup')
const animalePhotoRoutes = require('./views/animalPhoto')
const animalDetailsDeleteRoutes = require('./views/animalPhoto');
const animalGetRoutes = require('./views/animalPhoto');
const volunteerAddRoutes = require('./views/volunteer')




dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT

app.get('/', (req, res)=>{
    res.send('API is Running');
})

app.use('/', adminSingupRoutes);
app.use('/', adminLoginRoutes);
app.use('/',animalePhotoRoutes);
app.use('/',animalDetailsDeleteRoutes);
app.use('/',animalGetRoutes );
app.use('/',volunteerAddRoutes );



app.listen(PORT, ()=>{
    console.log(`Server Running at http://localhost:2024`);
});

