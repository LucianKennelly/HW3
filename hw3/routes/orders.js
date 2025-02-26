//Lucian
var express = require('express');
var router = express.Router();
var orders = [];
var fs = require('fs');

fs.readFile('./Data/orders.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }
  try {
    orders = JSON.parse(data);
    console.log(orders);
    // You can now work with your JSON data here
  } catch (err) {
    console.error('Error parsing JSON:', err);
  }
});
/* GET orders listing. */
router.get('/', function(req, res, next) {
    res.json(JSON.stringify(orders)); // Sends a JSON response
});
/* PUSH orders listing. */
router.post('/', (req, res, next) => {
    res.json(JSON.stringify(orders)); // Sends a JSON response
});
exports.routes= router;
exports.orders = orders;