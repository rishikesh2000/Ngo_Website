const Volunteer = require('../models/volunteerModel');


exports.addVounteer = async (req, res) => {

    try {

        const { fullName, email, phoneNumber, age, gender } = req.body


        if (!fullName || !email || !phoneNumber || !age || !gender) {

            return res.status(400).send("All fields are required");
        }

        const volunteerExist = await Volunteer.findOne({ email });

        if (volunteerExist) {

            return res.status(400).send("Volunteer Exists");
        }
        const newVolunteer = new Volunteer({

            fullName,
            email,
            phoneNumber,
            age,
            gender
        })

        await newVolunteer.save();

        return res.status(201).send("Volunteer Register Succesfully");

    } catch (error) {

        return res.status(500).send("Server Error");

    }
}