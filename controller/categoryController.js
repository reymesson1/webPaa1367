var mongoose = require('mongoose');
var Master = require('../models/master.js');
var Category = require('../models/category.js');
var Counter = require('../models/counter.js');
var jwt = require('jwt-simple');
var moment = require('moment');
var today = moment(new Date()).format('YYYY-MM-DD');

exports.getCategory = async(req,res)=>{

  let category = await Category.find({})
  
  res.send(category);
}

// exports.setCompany = async(req,res)=>{

//   let newCompany = req.body;
  
//   let company = new Company(newCompany);
  
//   console.log(company);

//   company.save(function(err){
//     if(!err){
//       console.log('Company saved');
//     }else{
//         console.log(err)
//     }
//   })
    
//   res.send(req.body);
// }

// exports.deleteCompany = async(req,res)=>{

//   var obj = req.body;

//   var company = await Company.remove({"id":req.body.id},function(err,master){
//     if(!err){
//       console.log("Product removed ");
//     }
//   })

//   res.send(company);
// }

// exports.getCompanyIpad = async(req,res)=>{


//   // productBracelet["image2"] = 
//   var companies = await Company.find();
 
//   let data = {

//     "error": false,
//     "message": "successfully",
//     "data": companies
//   }

//   res.send(data);

// }
