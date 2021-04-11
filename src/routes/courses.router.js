const express = require('express');
const coursesController = require('../app/controller/courses.controller');
const courses_router = express.Router();
// courses_router.post('create', coursesController.create);
courses_router.get('/', coursesController.home);
courses_router.post('/delete-real', coursesController.deleteReal);

courses_router.get('/me', coursesController.me);
courses_router.get('/trash', coursesController.trash);
courses_router.delete('/delete/:id', coursesController.delete)
courses_router.get('/update/:id', coursesController.update);
courses_router.put('/store/:id', coursesController.store)
courses_router.get('/restore/:id', coursesController.restore);
courses_router.post('/create', coursesController.create);
courses_router.get('/addcourse', coursesController.addCourse);
courses_router.get('/:slug', coursesController.course);
module.exports = courses_router;