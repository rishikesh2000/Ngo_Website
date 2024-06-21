const cloudinary = require('cloudinary').v2;
const couldnaryConfig = require('../config/multerConfig');
const Animal = require('../models/animalPhotoModel');


////////Add Animal Details////////// 

exports.uploadFile = async (req, res) => {
    console.log(req.file);
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const result = await cloudinary.uploader.upload(req.file.path);
        console.log('Cloudinary upload result');

        const { animalName, description } = req.body;

        // Check if required fields are present
        if (!animalName || !description) {
            return res.status(400).json({ error: "animalName and description are required" });
        }

        const animalDetails = new Animal({
            animalId: result.public_id,
            animalName,
            description,
            imageUrl: result.secure_url,
        });

        await animalDetails.save();
        res.json({
            animalId: result.public_id,
            animalName,
            description,
            imageUrl: result.url,
            message: "File uploaded successfully"
        });
    } catch (err) {
        console.log(err, "Cloudinary upload failed");
        res.status(500).json({ error: "Cloudinary upload failed" });
    }
};

//// Delet Animal Details////

exports.deleteDetails = async (req, res) => {

    const animalId = req.params.id;

    try {
        const deleteAnimalDetails = await Animal.deleteOne({ animalId });

        cloudinary.uploader.destroy(animalId, (error, result) => {

            if (error) {
                console.error('Image deletion failed:', error);
            } else {
                console.log('Image deletion successful:', result);
            }

        });

        console.log("Deleted animal details:", deleteAnimalDetails);

        if (deleteAnimalDetails.deletedCount === 0) {
            console.log("Animal not found for deletion");
            return res.status(400).send("Can Not Delete: Animal Details Not Found");
        }

        console.log("Animal details deleted successfully");
        return res.status(200).send("Animal Details Deleted Successfully");
    } catch (error) {
        console.error("Error deleting animal details:", error);
        return res.status(500).send("Server Error");
    }
};


//////////// Get Animal Details ///////////


exports.getAnimalDetails = async (req, res)=>{

    try {
        
        const  animalDetails = await Animal.find();

        if(!animalDetails){

           return res.status(400).send("Details Not Found");
        }
        return res.status(200).json({animalDetails});
    } catch (error) {
        
    }
}