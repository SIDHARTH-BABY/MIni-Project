var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
 if(req.session.error){
  res.render('user_login',{"error" : req.session.error})
  req.session.error =false
  }else if(req.session.user){
    res.redirect('/home')
  }else{
    res.render('user_login',{title:"wrong"})
  }
})

/* GET home page. */
 router.get('/home', function(req, res, next) {
 if(req.session.user){
  res.render('userpage',{products})
 }else{
  res.redirect('/')
 }
  
});
router.post('/login', function(req, res, next) {
  const data = req.body
  let user={
    email: 'sidhu@gmail.com',
    password: 1234
  }
  if(user.email == data.email){
    if(user.password == data.password){
      req.session.user = data
    res.redirect("/home");

    }else{
    req.session.user = "Incorrect Password"
    res.redirect('/')
  }
}else{
  req.session.error ="incorrect email"
  res.redirect('/')
}

})

router.get('/signout', function (req, res, next) {
  req.session.destroy()
  res.redirect('/');
});


let products=[
  {
    name:"samsung  ",
    category: "tv",
    description:"dhhldhvldil",
    Image: "https://images.samsung.com/is/image/samsung/in-full-hd-tv-te50fa-ua43te50fakxxl-frontblack-231881877?$650_519_PNG$"

  },
  {
    name:"Bravia ",
    category: "tv",
    description:"dhhldhvldil",
    Image: "https://www.sony-asia.com/image/f161a88d5921dbaa007f98e46074bc1b?fmt=png-alpha&wid=960"

  },
  {
    name:"compaq ",
    category: "tv",
    description:"dhhldhvldil",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnAf_e0KT5oUpVSHxCdgmE0hsKArpNfWYCNg&usqp=CAU"

  },
  {
    name:"LG ",
    category: "tv",
    description:"dhhldhvldil",
    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuAs3eSY-izWuWSgG8ZKvZaAfjkZebZ1Q32Q&usqp=CAU"

  }

]




module.exports = router;


