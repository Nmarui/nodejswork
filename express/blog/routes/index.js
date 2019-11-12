var express = require('express');
var router = express.Router();
const { users,chapterList }=require('./data.json');

/* GET home page. */
router.use(express.static(__dirname));

router.get('/login',function(req,res){
  res.type('text/html');
  res.status(200);
  res.sendfile(__dirname+'/login.html');
});
router.get('/lic',function(req,res){
  if (req.query.username==users[0].username && req.query.pwd==users[0].password) {
      res.type('text/html');
      res.status(200);
      res.sendfile(__dirname+"/list.html");
  }else {
      res.send("用户名或者密码错误");
  }
})
router.get('/rbc',function(req,res){
  res.send(chapterList);
})
module.exports = router;