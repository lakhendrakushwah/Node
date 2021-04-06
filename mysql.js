var mysql = require('mysql');
var con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'madhu@cool',
    database: 'user',
});
con.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log('Connected');
    }
})