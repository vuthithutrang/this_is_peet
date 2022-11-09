const courses = require("../models/Course");
const {mutipleMongooseToObject} = require("../../util/mongoose");


class Newscontroller{
    //GET /news
    index(req, res, next){
        courses.find({})
        .then(courses => {
            res.render('news',{ courses : mutipleMongooseToObject(courses) });
        })
        .catch(error => next(error));
    }
}

module.exports = new Newscontroller ;
