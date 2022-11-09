const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const comment = new Schema ({
    name : {type : String },
    description : {type : String },
    image: {type : String},
    createdAt : {type : Date, default : Date.now},
    createdUpdate : {type : Date, default : Date.now},
    link: { type: String, slug: "name" , unique : true, }
   
})
module.exports = mongoose.model('comment',comment);