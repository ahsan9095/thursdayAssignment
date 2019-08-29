var express = require('express');
var morgan = require('morgan');
var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter');
var leaderRouter = require('./leaderRouter');

var app = express();

app.use(morgan('dev'));

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leadership', leaderRouter);

var server = app.listen(8080, function () {
 
  console.log("http://127.0.0.1:8080")
})