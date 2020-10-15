'use strict';

const socketIndex = require.main.require('./src/socket.io');
const socketPlugins = require.main.require('./src/socket.io/plugins')

// socketPlugins.yourplugin = {
//   // This function is now exposed as the event 'plugins.yourplugin.someevent'
//   someevent: function (socket, data, callback) {
//     // socket.uid is now the verified uid of the user sending the event.
//     // data is the object sent with the event.
//     console.log("UID " + socket.uid + " sent data:", data);
//     // socket.uid is 0 if the user is a guest.
//     callback(!socket.uid, {uid: socket.uid});
//   }
// }


const GamelancerSocket = {
    push: function(data) {
        console.log(data);
        socketIndex.server.sockets.emit('notify-forum', data);
    }
};


module.exports = GamelancerSocket;