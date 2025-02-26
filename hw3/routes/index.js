var express = require('express');
const app = express();
var router = express.Router();
const adminData = require('./orders');

app.set("view engine", "ejs");

app.get("/",(req,res) => {
  res.render("index");
});
/* GET home page. 
router.get('/', function(req, res, next) {
  console.log(adminData.orders);
  res.render('index', { title: 'Express' });
});*/
module.exports = router;
