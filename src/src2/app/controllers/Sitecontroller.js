const courses = require("../models/Course");
const {mutipleMongooseToObject} = require("../../util/mongoose");

class Sitecontroller {
    //Get /
    index(req, res, next){
        courses.find({})
        .then(courses => {
            res.render('home',{ courses : mutipleMongooseToObject(courses) });
        })
        .catch(error => next(error));
    }
}

module.exports = new Sitecontroller ;