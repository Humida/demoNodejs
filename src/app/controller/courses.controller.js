const courses = require('../models/courses.models');
module.exports = {
    home: function(req, res, next) {
        courses.find({})
            .then(courses => {
                courses = courses.map(course => course.toObject());
                res.render('courses', { courses });
            })
            .catch(next);
    },
    course: function(req, res, next) {
        courses.findOne({ slug: req.params.slug })
            .then(courses => { res.json(courses) })
            .catch(next);
    },
    create: async function(req, res) {
        console.log(req.body);
        var newItem = new courses(req.body);
        await newItem.save();
        res.redirect('/courses');
    },
    addCourse: function(req, res) {
        res.render('addcourses');
    },
    me: function(req, res, next) {
        courses.find({})
            .then(courses => {
                courses = courses.map(course => course.toObject());
                res.render('me', { courses });
            })
            .catch(next);
    },
    update: function(req, res, next) {
        courses.find({ _id: req.params.id })
            .then(courses => {
                courses = courses.map(course => course.toObject());
                console.log(courses);
                res.render('update', { courses });
            })
            .catch(next);
    },
    store: function(req, res, next) {
        courses.findOneAndUpdate({ _id: req.params.id }, req.body, (err, item) => {
            if (!err) {
                res.redirect('/courses');
            } else {
                throw error(next);
            }
        })
    },
    delete: function(req, res, next) {
        courses.findOneAndDelete({ _id: req.params.id }, function(err) {
            if (!err) {
                res.redirect('/courses/me');
            } else {
                throw errors(err);
            }
        });
    }

};