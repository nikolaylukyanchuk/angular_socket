var MessageRepo = require('./repositories/messageRepo');

module.exports.process = function(socket){
    var messageRepo = new MessageRepo();
    setInterval(function(){
        messageRepo.getUserMessages(function(err, messages){
            socket.emit('userMessage', messages[0]);
        });
    }, 2500);
};