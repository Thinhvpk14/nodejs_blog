const Course = require('../models/Course');

class SiteController {
  //[GET] /news
  home(req, res) {

    Course.find({})
      .then(courses => {
        res.json(courses);
      })
      .catch(error => {
        res.status(400).json({ error: 'ERROR' });
      });

  }

  //[GET] /news/:search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
