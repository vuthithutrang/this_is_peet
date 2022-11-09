const Course = require("../models/Course");
const Courses = require("../models/Course");
const Comments = require("../models/Comment")
const Comment = require("../models/Comment")
const { mongooseToObject } = require("../../util/mongoose");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class Coursecontroller {
    //Get / link
    show(req, res, next) {
        Course.findOne({ link: req.params.link })
            .then(course =>
                res.render('courses/show', { course: mongooseToObject(course) } )
               
            )
            .catch(next);
    }

    // comment(req, res, next) {
    //     Comment.findOne({ link: req.params.link })
    //         .then(comment =>
    //             res.render('courses/comment', { comment: mongooseToObject(comment) } )
    //         )
    //         .catch(next);
    // }

    //Get /courses/create
    searchcontend(req, res, next) {
        res.render('courses/searchcontend');
    }

    
    //Get /courses/search
    search(req, res, next) {
        res.render('courses/search');
    }

    //post /courses/storesearch
    storesearch(req, res, next) {
        Courses.find(req.body)
            .then(courses => {
                res.render('courses/search', { courses: mutipleMongooseToObject(courses) });
            })
    }

    rendercontend(req, res, next) {
        Courses.find(req.body)
            .then(courses => {
                res.render('courses/searchcontend', { courses: mutipleMongooseToObject(courses) });
            })
    }

    //Post /courses/store
    store(req, res, next) {
        const comment = new Comments(req.body);
        comment.save()
        Comments.find(req.body)
            .then(comments => {
                res.render('courses/show', { comments: mutipleMongooseToObject(comments) });
            })
    }
}

module.exports = new Coursecontroller;
