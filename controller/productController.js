var sql     = require('mssql');
// var sqlserver = new mssql.mssql();

exports.getMaster = async(req,res)=>{

    console.log(req.body);
    var dbConfig = {
      host:'localhost',
      server:'DESKTOP-4CBHF69',
      database:'WideWorldImporters',
      user:'sa',
      password:'1234',
      port:1433,
      options: {
        encrypt: false,
        trustedConnection: true,
      },
  
    };

    sql.connect(dbConfig)
    .then((conn) => 
        conn.query("SELECT * FROM Sales.Orders")
          .then((v) => console.log(v))
          .then(() => conn.close())
    )

    // const config  = {
    //   database: "WideWorldImporters",
    //   server: "DESKTOP-4CBHF69",
    //   options: {
    //     // trustedConnection: true,
    //     trustServerCertificate: true,
    //     useUTC: true
    //   }
    // };

    // await sql.connect(config)
    // const result = await sql.query`select * from Sales.Orders`
    // console.log(result)
    

    

    var products = [ 
    {
        id: 0,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'14.99',
        description:'A unique combination'                        
      },                
      {
        id: 1,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'28.99',
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
        price:'37.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 4,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'74.99',
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
      },                
      {
        id: 10,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 11,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 12,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 13,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'37.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 14,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'74.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 15,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 16,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 17,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                                        
      },                
      {
        id: 18,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 19,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 20,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 21,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      }                ,                
      {
        id: 22,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 23,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'37.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 24,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'74.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 25,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 26,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 27,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                                        
      },                
      {
        id: 28,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 29,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 30,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 31,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 32,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 33,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'37.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 34,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'74.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 35,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 36,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 37,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                                        
      },                
      {
        id: 38,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 39,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 40,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 41,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 42,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 43,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'37.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 44,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'74.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 45,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 46,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 47,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                                        
      },                
      {
        id: 48,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 49,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 50,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 51,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 52,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 53,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'37.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 54,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'74.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 55,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 56,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 57,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                                        
      },                
      {
        id: 58,
        description:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'Vidalia onion'                        
      },                
      {
        id: 59,
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