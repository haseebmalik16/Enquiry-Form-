const enquiryModel = require("../models/enquiry.model");

// Create a new enquiry.
const enquiryInsert = (req, res) => {
    const { name, email, phone, message } = req.body;
    const enquiry = new enquiryModel({
        name,
        email,
        phone,
        message
    });
    enquiry.save().then(() => {
        res.send({ status: 1, message: "Enquiry saved successfully." });
    }).catch((err) => {
        res.send({ status: 1, message: "Error while saving enquiry", error: err });
    })
}

// List all enquiries.
const enquiryList = async (req,res)=>{
    const enquiry = await enquiryModel.find();
    res.send({ status: 1, enquiryList: enquiry});
} 

// delete enquiry.
const enquiryDelete = async (req,res)=>{
    const enId = req.params.id;
    const enquiry = await enquiryModel.deleteOne({_id: enId});
    res.send({ status: 1, message: "Enquiry deleted successfully.",enquiry });
}
module.exports = { enquiryInsert ,enquiryList,enquiryDelete};