var mongoose = require( 'mongoose' );
var dbURI = 'mongodb+srv://berkekaymaz:1234@mekanbul.2vosl3c.mongodb.net/mekanbul?retryWrites=true&w=majority'; 
mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log("Mongoose" + dbURI + "adresindeki veritabanına bağlandı\n");
});
mongoose.connection.on("error",function(err){
    console.log("Mongoose bağlantı hatası\n:"+err);
});
mongoose.connection.on("disconnected",function(){
    console.log("Mongoose bağlantısı kesildi\n");
});

process.on("SIGINT",function(){
    mongoose.connection.close();
    console.log("Bağlantı kapatıldı kapatıldı");
    process.exit(0);
})


require("./venue"); 