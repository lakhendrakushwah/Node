// // var http = require('http');
// // http.createServer(function (req,res){
// //     res.write("Hello From NodeJS");
// //     res.end();
// // }).listen(5000)


// var kk = require('./other');
// console.log(kk(10,20));

// #7..................

// var http = require('http');
// var data = [
//     {name: 'Lakha', agr: '21', email:'lakha@gmail.com'},
//     {name: 'Mahendra', agr: '20', email:'lakha@test.com'}
// ]

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type': 'applocation/json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(3900);

//#8......................................

// var http = require('http');
// var page = `
// <h1>Hello Node JS :)</h1>
// <input type = 'text'> <br><br>
// <input type = 'text'> <br><br>
// <input type = 'text'> <br><br>`

// http.createServer(function(req,res){
//     res.writeHead(200,{'Contenyt-type': 'text/html'});
//     res.write(page);
//     res.end();
// }).listen(4000);

// #9...................................................................

// var http = require('http');
// var UC = require('upper-case');
// http.createServer(function(req,res){
//     res.write(UC.upperCase("Node Web Js by Using npm module"));
//     res.end();
// }).listen(4000);

// #10.................................................................

// #11.................................................................


// npm i --save-dev nodemon

// var http = require('http');
// var UC = require('upper-case');
// http.createServer(function(req,res){
//     res.write(UC.upperCase("Node Web Js by Using npm module"));
//     res.end();
// }).listen(4000);


// #12 File System ........................................................
// var http = require('http');
// var fs = require('fs');
// http.createServer(function(req,res){
//     fs.readFile('demo.html',function(error,data){
//         res.writeHead(200,{'content-type':'text/html'});
//         res.write(data);
//         res.end();
//     });
// }).listen(4000);

// // #14 eventEmitter... ........................................................
// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// eventEmitter.on("speak",function(name){
//     console.log(name,'is speaking ');

// });
// eventEmitter.emit("speak",'lakha');


//#19 Open file with Router ............................................................
// const express = require('express');
// const app = express();
// const router = express.Router();
// const checkUrl = require('./middleware_1');

// app.get('/',checkUrl,function(req,res){
//     res.sendFile(__dirname+"/19Home.html")
// })
// app.get('/about',checkUrl,function(req,res){
//     res.sendFile(__dirname+"/19About.html")
// })
// app.get('/login',checkUrl,function(req,res){
//     res.sendFile(__dirname+"/19login.html")
// })

// app.listen(1900);
// app.use('/',router);

//#20 Tamplet Engine EJS ..........................................................................
// const express = require('express');
// const app = express();
// app.set('view engine','ejs');
// app.get("/profile/:name",function(req,res){
//     console.log(req.params.name)
//   res.render('Profile',{name:req.params.name});  
// })
// app.listen(2000);


//#21 Dynamic Content ..........................................................................
// const express = require('express');
// const app = express();
// app.set('view engine','ejs');
// app.get("/profile/:name",function(req,res){
//     console.log(req.params.name);
//     data={email:'test@test.com',address:'Noida',skills:['Node Js', 'C++', 'Java']};
//   res.render('Profile',{name:req.params.name,data:data});
// })
// app.listen(2100);

//#22 Make Common Header  .......................................................................................
// const express = require('express');
// const app = express();
// app.set('view engine','ejs');
// app.get("/profile/:name",function(req,res){
//     console.log(req.params.name);
//     data={email:'test@test.com',address:'Noida',skills:['Node Js', 'C++', 'Java']};
//   res.render('Profile',{name:req.params.name,data:data});
// });
// app.get('/',function(req,res){
//   console.log('this is Home page')
//     res.render('Home');
// })

// app.get('/Login',function(req,res){
//   console.log('this is login page')
//   res.render('Login');
// })


// app.listen(2200);

//#22 Add Staticnsmfkflgjfkgnfk, Files and CSS  .......................................................................................
// const express = require('express');
// const path = require('path');
// const app = express();

// app.use(express.static(path.join(__dirname +'/assets')));

// app.set('view engine','ejs');
// app.get("/profile/:name",function(req,res){
//     console.log(req.params.name);
//     data={email:'test@test.com',address:'Noida',skills:['Node Js', 'C++', 'Java']};
//   res.render('profile',{name:req.params.name,data:data});
// });
// app.get('/',function(req,res){
//   console.log('this is Home page')
//     res.render('Home');
// })

// app.get('/Login',function(req,res){
//   console.log('this is login page')
//   res.render('Login');
// })


// app.listen(2300);

// //#24 Make Form $ Quary String  .......................................................................................
// const express = require('express');
// const path = require('path');
// const app = express();

// app.use(express.static(path.join(__dirname +'/assets')));

// app.set('view engine','ejs');
// app.get("/profile/:name",function(req,res){
//     console.log(req.params.name);
//     data={email:'test@test.com',address:'Noida',skills:['Node Js', 'C++', 'Java']};
//   res.render('profile',{name:req.params.name,data:data});
// });
// app.get('/',function(req,res){
//   console.log('this is Home page')
//     res.render('Home');
// })

// app.get('/Login',function(req,res){

//   console.log(req.query);
//   res.render('Login');
// })
// app.listen(2300);

//#25 After #29.............................................................................................................................


//mongodb+srv://lakha:<password>@cluster0.sap3o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// #26 Connect With MongoDB ...........................................................................................................
// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://lakha:Lakha@12@cluster0.sap3o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/youtube',
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }).then(() => {
//   console.log("db connection done")
// });


// #27+28 Define Model for MongoDb + users.js.....................................................................................
// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const users = require('./users');
// 27 mongoose.connect('mongodb+srv://lakha:Lakha@12@cluster0.sap3o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/youtube',
// mongoose.connect('mongodb+srv://lakha:Lakha@12@cluster0.sap3o.mongodb.net/youtube?retryWrites=true&w=majority/',
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }).then(() => {
//   console.log("db connection done")
// });

// users.find({}, function(err,users){// List laane ka tareeka h ye
//   if(err) console.log(err);
//   console.log(users);
// }) 

// //#29 insert data collection ...........................................................................................................
// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const users = require('./models/users');
// mongoose.connect('mongodb+srv://lakha:Lakha@12@cluster0.sap3o.mongodb.net/youtube?retryWrites=true&w=majority/',
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }).then(() => {
//   console.log("db connection done")
// });

// users.find({}, function(err,users){// List laane ka tareeka h ye
//   if(err) console.log(err);
//   console.log(users);
// }) 
// const data = new users({
//   _id:new mongoose.Types.ObjectId(),
//   name: 'Madhu',
//   email:'Mahu@test.in',
//   address:'Balknee'
//   });
//   data.save().then((result)=>{
//     console.log(result);
//   })
//   .catch(err=>console.log(err)
//   )


//#25 Make Form and Query String.....................................................................................................
const express = require('express');
const mongoose = require('mongoose');
const dev = require('./models/users');
//mongoose.connect('mongodb+srv://lakha:Lakha@12@cluster0.sap3o.mongodb.net/youtube?retryWrites=true&w=majority/',
mongoose.connect('mongodb+srv://lakha:Lakha@12@cluster0.sap3o.mongodb.net/youtube',
// mongoose.connect('mongodb+srv://lakha:Lakha@12@cluster0.sap3o.mongodb.net/mySecondDatabase',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
  console.log("db connection done")
});
const path = require('path');
const app = express();
var bodyParser = require('body-parser');
var encoder = bodyParser.urlencoded();


app.use(express.static(path.join(__dirname + '/assets')));

app.set('view engine', 'ejs');
app.get("/profile/:name", function (req, res) {
  console.log(req.params.name);
  data = { email: 'test@test.com', address: 'Noida', skills: ['Node Js', 'C++', 'Java'] };
  res.render('profile', { name: req.params.name, data: data });
});
app.get('/', function (req, res) {
  console.log('this is Home page')
  res.render('Home');
})

app.post('/Login', encoder, function (req, res) {

  console.log(req.body);
  const lakha = new dev({
    name:req.body.name,
    email:req.body.email,
    address:req.body.address,

  });
  lakha.save();
  res.render('Home');
})
app.get('/Login', function (req, res) {
  //console.log(req.query);
  res.render('Login');
});
app.listen(2300)


// const data = new users({
//   _id: new mongoose.Types.ObjectId(),
//   name: 'Maksds',
//   email: req.body.email,
//   address: req.body.passward,
// });