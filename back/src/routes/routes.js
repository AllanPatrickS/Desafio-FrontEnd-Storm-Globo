const meeting = require('./meeting');
const user = require('./user');

module.exports = function (app) {
    meeting(app);
    user(app);
}
