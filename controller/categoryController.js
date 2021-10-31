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