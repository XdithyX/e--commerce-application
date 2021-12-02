var db= require('../config/connection')
module.exports={
    addproduct:(product,callback)=>
    {
        console.log(product)
        db.get().collection('products').insertOne(product).then((data)=>{
            callback(true)
        })
    }
}