var express = require('express');
const { addproduct } = require('../helpers/product-helpers');
var router = express.Router();
var producthelpers= require('../helpers/product-helpers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products =[
    {
      name:"oneplus nord",
      category:"Mobile",
      description:"nice phone",
      image :"https://helios-i.mashable.com/imagery/reviews/01MsKXhnucbieHlbObEgLpy/hero-image.fill.size_1200x1200.v1629522312.jpg"
    },
    {
      name:"vivo v5",
      category:"Mobile",
      description:"nice phone",
      image :"https://helios-i.mashable.com/imagery/reviews/01MsKXhnucbieHlbObEgLpy/hero-image.fill.size_1200x1200.v1629522312.jpg"
    },
    {
      name:"IPhone11",
      category:"Mobile",
      description:"nice phone",
      image :"https://helios-i.mashable.com/imagery/reviews/01MsKXhnucbieHlbObEgLpy/hero-image.fill.size_1200x1200.v1629522312.jpg"
    },
    {
      name:"samsun s8",
      category:"Mobile",
      description:"nice phone",
      image :"https://helios-i.mashable.com/imagery/reviews/01MsKXhnucbieHlbObEgLpy/hero-image.fill.size_1200x1200.v1629522312.jpg"
    }
  ]
  res.render('admin/view-products',{admin:true,products})
});
router.get('/add-products',(req,res)=>{
  res.render('admin/add-products')
})

router.post('/add-products',(req,res)=>{
  console.log(req.body)
  console.log(req.files.Image)
  producthelpers.addproduct(req.body,(result)=>{
    res.render('/admin/add-products')
  })
})

module.exports = router;
