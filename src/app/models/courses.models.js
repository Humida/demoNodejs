const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coursesSchema = new Schema({
    id: String,
    title: String,
    imageAddress: String,
    des: String
});

const courses = mongoose.model('courses', coursesSchema);

module.exports = courses;