var mongoose = require('mongoose');
var Master = require('../models/master.js');
var Style = require('../models/style.js');
var Counter = require('../models/counter.js');
var jwt = require('jwt-simple');
var moment = require('moment');
var today = moment(new Date()).format('YYYY-MM-DD');

exports.getStyle = async(req,res)=>{

  let style = await Style.find({})
  
  res.send(style);
}

exports.setStyle = async(req,res)=>{

  let newStyle = req.body;
  
  let style = new Style(newStyle);
  
  console.log(style);

  style.save(function(err){
    if(!err){
      console.log('Style saved');
    }else{
        console.log(err)
    }
  })
    
  res.send(req.body);
}