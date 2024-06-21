const Admin = require('../models/adminModel');
const bcrypt = require('bcrypt');


exports.singup = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const existingUser = await Admin.findOne({ email: email });

        if (existingUser) {

            res.status(400).send("email already register");
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new Admin({
            name,
            email,
            password:hashedPassword
        });

        await newUser.save();

        res.status(201).send("Registration Successfully Compeleted");




    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Server error");
    }

};


//////////login//////////

exports.login = async (req, res)=>{
    const {email, password} = req.body;
    try{
    const admin = await Admin.findOne({email});
    

    if(!admin){

       return res.status(400).send("Admin Data Not Found");
    }

    
const passwordMatch= await bcrypt.compare(password, admin.password);
    if(!passwordMatch){

      return  res.status(400).send("Authetication Failed");
    }

   return res.status(200).send("Admin Logged In")
}catch(error){
    console.error("Error occurred:", error);
   return res.status(500).send("Internal Server Error");
}}


