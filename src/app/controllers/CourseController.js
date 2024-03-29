const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
  
  //[GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({
      slug: req.params.slug
    })
    .then(course => {
      res.render('courses/show', {
        course: mongooseToObject(course)
      });
    })
    .catch(next);
  }

  //[GET] /courses/create
  create(req, res, next) {
    res.render('courses/create');
  }

  //[POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://files.fullstack.edu.vn/f8-prod/courses/7.png`;
    const course = new Course(req.body);
    course.save()
      .then(() => res.redirect('/'))
      .catch(res.next);
  }
}

module.exports = new CourseController();
