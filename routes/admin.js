var express = require('express');
var router = express.Router();

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
})

module.exports = router;
