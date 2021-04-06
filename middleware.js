//#17..................................................................
// const express = require('express');
// const app = express();

// const checkUrl = function(req,res,next)
// {
//     console.log("Current rout is ", req.originalUrl)
//     next();
// }
// app.use(checkUrl);
// app.get('/',function(req,res){
//     res.send('This is Home page ');
// });

// app.get('/about',function(req,res){
//     res.send('This is About Page');
// });
// app.get('/login',function(req,res){
//     res.send('this is Login page');
// });

// app.listen(5200);

//#18..................................................................

var http = require('http');

const express = require('express');
const app = express();
const router = express.Router();
const checkUrl = require('./middleware_1')

app.get('/',function(req,res){
    res.send('This is Home Page ');
})
app.get('/about',checkUrl,function(req,res){
    res.send('This is About Page ');
})
app.get('/login',checkUrl,function(req,res){
    res.send('This is Login Page ');
})
app.get('/details',function(req,res){
    res.send('This is Details Page ');
})
app.use('/',router);
app.listen(5200);