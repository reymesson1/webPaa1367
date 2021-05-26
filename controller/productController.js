// var sql = require('mssql');
const path = require("path");
const multer = require("multer");

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

    var products = [ 
      {
          id: 0,
          description:'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label:'Hot',
          price:'4.99',
          description:'A unique combination'                        
        },                
        {
          id: 1,
          description:'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label:'Hot',
          price:'4.99',
          description:'Italian pizza'                                                        
        },                
        {
          id: 2,
          description:'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label:'Hot',
          price:'4.99',
          description:'Vidalia onion'                        
        },                
        {
          id: 3,
          description:'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label:'Hot',
          price:'4.99',
          description:'Vidalia onion'                        
        },                
        {
          id: 4,
          description:'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label:'Hot',
          price:'4.99',
          description:'Vidalia onion'                        
        },                
        {
          id: 5,
          description:'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label:'Hot',
          price:'4.99',
          description:'Vidalia onion'                        
        },                
        {
          id: 6,
          description:'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label:'Hot',
          price:'4.99',
          description:'Vidalia onion'                        
        },                
        {
          id: 7,
          description:'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label:'Hot',
          price:'4.99',
          description:'Vidalia onion'                                       
        },                
        {
          id: 8,
          description:'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label:'Hot',
          price:'4.99',
          description:'Vidalia onion'                        
        },                
        {
          id: 9,
          description:'Uthappizza',
          image: 'assets/images/uthappizza.png',
          category: 'mains',
          label:'Hot',
          price:'4.99',
          description:'Vidalia onion'                        
        }                
      ];
  
      res.send(products);
  
  

}

exports.setMaster = async(req,res)=>{

    console.log(req.body)

}

exports.setPagination = async(req,res)=>{

    var obj = req.body;



    console.log(req.body)

}

exports.setImage = async(req,res)=>{


  console.log(req.body);

  const handleError = (err, res) => {
    res
      .status(500)
      .contentType("text/plain")
      .end("Oops! Something went wrong!");
  };

  const upload = multer({
    dest: "C:\\Downloads"
  });

  const tempPath = req.file.path;
  const targetPath = path.join(__dirname, "./uploads/image.png");

  if (path.extname(req.file.originalname).toLowerCase() === ".png") {
    fs.rename(tempPath, targetPath, err => {
      if (err) return handleError(err, res);

      res
        .status(200)
        .contentType("text/plain")
        .end("File uploaded!");
    });
  } else {
    fs.unlink(tempPath, err => {
      if (err) return handleError(err, res);

      res
        .status(403)
        .contentType("text/plain")
        .end("Only .png files are allowed!");
    });
  }


}