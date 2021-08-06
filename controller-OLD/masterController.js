exports.getMaster = async(req,res)=>{

    console.log(req.body);

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
      }                
    ];

    res.send(products);


}

exports.setMaster = async(req,res)=>{

    console.log(req.body)

}