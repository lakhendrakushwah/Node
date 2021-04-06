
// #10.................................................................
//https://myaccount.google.com/lesssecu...
var nodeMailer = require('nodemailer');
var transport = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS:true,
    auth:{
        user: 'lakha.blaks@gmail.com',
        pass: 'hee li li lee'
    }
});
var mailOption = {
    from: 'lakha.blaks@gmrtyuiai.com',
    to: 'kushwahlakhendra@gmail.com',
    subject: 'Test NodeJS Mail',
    text: ' Click for Security  https://myaccount.google.com/lesssecu...'
}
//https://myaccount.google.com/lesssecu...
transport.sendMail(mailOption, function(error,info){

    if(error){
        console.log(error);
    }
    else{
        console.log("Email has been send",info.responce);

    }

})