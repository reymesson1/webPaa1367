var mongoose = require('mongoose');
var Master = require('../models/master.js');
var Company = require('../models/company.js');
var Counter = require('../models/counter.js');
var jwt = require('jwt-simple');
var moment = require('moment');
var today = moment(new Date()).format('YYYY-MM-DD');

exports.getCompany = async(req,res)=>{

  let company = await Company.find({})
  
  res.send(company);
}

exports.setCompany = async(req,res)=>{

  let newCompany = req.body;
  
  let company = new Company(newCompany);
  
  console.log(company);

  company.save(function(err){
    if(!err){
      console.log('Company saved');
    }else{
        console.log(err)
    }
  })
    
  res.send(req.body);
}