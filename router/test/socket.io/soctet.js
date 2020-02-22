var io = require('../../../app')

var newMessage = function (message) {
    console.log(message);
    io.emit(message);
}


module.exports = newMessage;