const mongoose = require('mongoose');

module.exports = () => {

    mongoose.connect('mongodb+srv://movie_user:abcd1234@movieapimeanzeil.awkj0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    mongoose.connection.on('open', ()=>{
        //console.log('MongoDB: Connected');
    mongoose.connection.on('open',(err)=>{
        console.log('MongoDB: Error',(err));
        });
    });
};