const express = require('express');
const { enquiryInsert, enquiryList, enquiryDelete, enquirySingleRow, enquiryUpdateRow } = require('../controllers/enquiry.controller');
const enquiryRoute = express.Router();

enquiryRoute.post('/insert', enquiryInsert);
enquiryRoute.get('/view', enquiryList);
enquiryRoute.delete('/delete/:id', enquiryDelete);
enquiryRoute.get('/single/:id', enquirySingleRow);
enquiryRoute.put('/update/:id', enquiryUpdateRow);

module.exports = enquiryRoute;