'use strict';

var socketIndex = require.main.require('./src/socket.io');
var socketPlugins = module.parent.require('./socket.io/plugins')

var EmitSocket = {
    emitPostSave: function(postData) {
        console.log(postData);
        socketIndex.server.sockets.emit('hello-wold', postData);
    }
};


module.exports = EmitSocket;

socketPlugins.yourplugin = {
  // This function is now exposed as the event 'plugins.yourplugin.someevent'
  someevent: function (socket, data, callback) {
    // socket.uid is now the verified uid of the user sending the event.
    // data is the object sent with the event.
    console.log("UID " + socket.uid + " sent data:", data);
    // socket.uid is 0 if the user is a guest.
    callback(!socket.uid, {uid: socket.uid});
  }
}