module.exports = function(req,res,next){
    console.log('Current Url is     This is use of middleware file',req.originalUrl);
    next();
}