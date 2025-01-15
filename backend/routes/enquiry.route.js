const express = require('express');
const { enquiryInsert, enquiryList, enquiryDelete } = require('../controllers/enquiry.controller');
const enquiryRoute = express.Router();

enquiryRoute.post('/insert', enquiryInsert);
enquiryRoute.get('/view', enquiryList);
enquiryRoute.delete('/delete/:id', enquiryDelete);

module.exports = enquiryRoute;