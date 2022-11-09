const newRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./site');


function route(app){

    app.use('/news' , newRouter);
    app.use('/courses' , coursesRouter);
    app.get('/', siteRouter);
    
}

module.exports = route ;

