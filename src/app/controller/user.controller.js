const user = require('../models/user.models');

module.exports = {
    home: function(req, res) {
        user.find({}, function(err, user) {
            if (!err) {
                res.json(user);
            } else {
                console.log(err);
            }
        })
    }
};