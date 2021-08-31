// var sql = require('mssql');
var fs = require('fs');
var multer  = require('multer');
var uploadsFolder = __dirname + '/uploads/';  // defining real upload path
var upload = multer({ dest: uploadsFolder }); // setting path for multer
var sharp = require('sharp');

var Product = require('../models/product.js');

exports.getMaster = async(req,res)=>{

    // console.log(req.body);
    // var dbConfig = {
    //   host:'localhost',
    //   server:'DESKTOP-4CBHF69',
    //   database:'WideWorldImporters',
    //   user:'sa',
    //   password:'1234',
    //   port:1433,
    //   options: {
    //     encrypt: false,
    //     trustedConnection: true,
    //   },
  
    // };

    // sql.connect(dbConfig)
    // .then((conn) => 
    //     conn.query("SELECT TOP 10 * FROM Sales.Orders")
    //       // .then((v) => console.log(v.recordset))
    //       .then( (v) => {

    //         return res.send(v.recordset);

    //       })
    //       .then(() => conn.close())
    //       // .then((v) => res.send(v)  )
    // )

      let products = await Product.find({})
  
      res.send(products);
  
  

}

exports.setMaster = async(req,res)=>{

  let newProduct = req.body;

  // console.log(newProduct.description);
  
  let product = new Product(newProduct);
  
  // console.log(product);

  product.save(function(err){
    if(!err){
      console.log('Product saved');
    }else{
        console.log(err)
    }
  })

  setTimeout(() => {
    
    let inputFile  = 'C:\\Users\\Rey Messon\\Desktop\\webPaa1367\\static\\images\\' +newProduct.image; 
    let outputFile  = 'C:\\Users\\Rey Messon\\Desktop\\webPaa1367\\static\\images\\'+ newProduct.description +'-' + newProduct.style + '-0-output' +'.jpg';
        
    sharp(inputFile).resize({ height: 246, width: 230 }).toFile(outputFile)
    .then(function(newFileInfo) {
        // newFileInfo holds the output file properties
        console.log("Success")
    })
    .catch(function(err) {
        console.log("Error occured");
    });

  }, 5000);

  res.send(req.body);


}

exports.editPictureProduct = async(req,res)=>{

  var obj = req.body;

  var product = await Product.findOne({"id":obj.productId},function(err,master){
    master.image = obj.name
    master.save(function(err,m){
      console.log("Product Default updated");
    })
  })


}


exports.editProduct = async(req,res)=>{

  var obj = req.body;

  var product = await Product.findOne({"id":obj.id},function(err,master){
    master.description = obj.description
    master.price = obj.price
    master.priceopt = obj.priceopt
    master.company = obj.company,
    master.companystyle = obj.companystyle,
    master.category = obj.category,
    master.style = obj.style,
    master.notes = obj.notes
    master.images.push( obj.image );
    master.save(function(err,m){
      console.log("Product Edit updated");
    })
  })

  console.log(obj);

  // res.send(product);

}

exports.deleteProduct = async(req,res)=>{

  var obj = req.body;

  var product = await Product.remove({"id":req.body.id},function(err,master){
    if(!err){
      console.log("Product removed ");
    }
  })

  res.send(product);
}

exports.editDeletePicture = async(req,res)=>{

  var obj = req.body;

  var product = await Product.findOne({"id":obj.productId},function(err,master){
    master.images.pull( obj.name );
    master.save(function(err,m){
      console.log("Product Edit delete picture");
    })
  })

  res.send(product);
}


exports.setPagination = async(req,res)=>{

    var obj = req.body;

    console.log(req.body)

}

exports.getHidden = async(req,res)=>{


  let productBracelet = await Product.findOne({category:'Bracelet'},{_id:0, hidden:1});

  console.log(productBracelet);

  res.send(productBracelet)

}
exports.setHidden = async(req,res)=>{

  let obj = req.body;

  let productBracelet = await Product.findOne({category:'Bracelet'},{_id:0, hidden:1});

  let reverse = !productBracelet.hidden

  let product = await Product.updateMany({}, {"$set":{"hidden": reverse}});

}


  exports.setMasterIpadFilter = async(req,res)=>{

  var obj = req.body;

    // productBracelet["image2"] = 
    var productBracelet = await Product.find({category:'Bracelet'});
    var productRM = await Product.find({category:'RM'});
    var productRings = await Product.find({category:'Rings'});
    var productPendant = await Product.find({category:'pendant'});
    var productPins = await Product.find({category:'Pins'});
    var productNecklace = await Product.find({category:'Necklace'});
    var productEarings = await Product.find({category:'Earings'});
    var productWatches = await Product.find({category:'Watches'});

    var productFilter

    if(obj.company!==''){

      productFilter = await Product.find({"company" : { $regex: '.*' + obj.company + '.*' }  })
    }else if(obj.companystyle!==''){
  
      productFilter = await Product.find({"companystyle" : { $regex: '.*' + obj.companystyle + '.*' }  })
    }else if(obj.style!==''){
  
      productFilter = await Product.find({"style" : { $regex: '.*' + obj.style + '.*' }  })
    }else if(obj.price!==''&& obj.priceopt!==''){
  
      productFilter = await Product.find({"price" : { $gte: obj.price, $lte: obj.priceopt }})
    }
  
    let data = {
  
      "error": false,
      "message": "successfully",
      "data": 
      [
        {
         "id":"0",
         "category":"Bracelets",
         "items": productBracelet
        },
        {
         "id":"1",
         "category":"RM",
         "items": productRM
        },
        {
         "id":"2",
         "category":"Rings",
         "items": productRings
        },
        {
         "id":"3",
         "category":"Pendant",
         "items": productPendant
        },
        {
         "id":"4",
         "category":"Pings",
         "items": productPins
        },
        {
         "id":"5",
         "category":"Necklace",
         "items": productNecklace
        },
        {
         "id":"6",
         "category":"Earings",
         "items": productEarings
        },
        {
         "id":"7",
         "category":"Watches",
         "items": productWatches
        },
        {
         "id":"8",
         "category":"Filter",
         "items": productFilter
        },
       
       ]
    
    }
  
    res.send(data);

}

exports.getMasterIpad = async(req,res)=>{


  // productBracelet["image2"] = 
  var productBracelet = await Product.find({category:'Bracelet'});
  var productRM = await Product.find({category:'RM'});
  var productRings = await Product.find({category:'Rings'});
  var productPendant = await Product.find({category:'pendant'});
  var productPins = await Product.find({category:'Pins'});
  var productNecklace = await Product.find({category:'Necklace'});
  var productEarings = await Product.find({category:'Earings'});
  var productWatches = await Product.find({category:'Watches'});
  var productFilter = await Product.find({});

  let data = {

    "error": false,
    "message": "successfully",
    "data": 
    [
      {
       "id":"0",
       "category":"Bracelets",
       "items": productBracelet
      },
      {
       "id":"1",
       "category":"RM",
       "items": productRM
      },
      {
       "id":"2",
       "category":"Rings",
       "items": productRings
      },
      {
       "id":"3",
       "category":"Pendant",
       "items": productPendant
      },
      {
       "id":"4",
       "category":"Pings",
       "items": productPins
      },
      {
       "id":"5",
       "category":"Necklace",
       "items": productNecklace
      },
      {
       "id":"6",
       "category":"Earings",
       "items": productEarings
      },
      {
       "id":"7",
       "category":"Watches",
       "items": productWatches
      },
      {
       "id":"8",
       "category":"Filter",
       "items": productFilter
      },
     
     ]
  
  }

  res.send(data);
}

exports.setMasterIpad = async(req,res)=>{

    var obj = req.body;

    console.log(obj);

    var productFilter = await Product.find({"company" : { $regex: '.*' + obj.company + '.*' }  })

    let data = {
      
      "error": false,
      "message": "successfully",
      "data": 
        [
          {
          "id":"8",
          "category":"Filter",
          "items": productFilter
          }
        ]
    }

    res.send(data);

}

exports.setFilterAPIUI = async(req,res)=>{

  var obj = req.body;

  var productFilter
  
  if(obj.newFilter.company!==''){

    productFilter = await Product.find({"company" : { $regex: '.*' + obj.newFilter.company + '.*' }  })
  }else if(obj.newFilter.companystyle!==''){

    productFilter = await Product.find({"companystyle" : { $regex: '.*' + obj.newFilter.companystyle + '.*' }  })
  }else if(obj.newFilter.style!==''){

    productFilter = await Product.find({"style" : { $regex: '.*' + obj.newFilter.style + '.*' }  })
  }else if(obj.newFilter.price!==''&& obj.newFilter.priceopt!==''){

    productFilter = await Product.find({"price" : { $gte: obj.newFilter.price, $lte: obj.newFilter.priceopt }})
  }

  res.send(productFilter);

}
