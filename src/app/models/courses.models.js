const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const coursesSchema = new Schema({
    id: String,
    title: String,
    imageAddress: String,
    des: String
});

coursesSchema.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

const courses = mongoose.model('courses', coursesSchema);

module.exports = courses;