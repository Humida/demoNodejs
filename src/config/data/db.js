const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/course', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connected');
    } catch (error) {
        console.log(`fail error type: ${error}`);
    }
}

module.exports = { connect };