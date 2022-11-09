const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const course = new Schema ({
    name : {type : String },
    description : {type : String },
    image: {type : String},
    createdAt : {type : Date, default : Date.now},
    createdUpdate : {type : Date, default : Date.now},
    link: { type: String, slug: "name" , unique : true, },
    pet_tag : {type : String },
    topic_tag : {type : String },

})

module.exports = mongoose.model('course',course);