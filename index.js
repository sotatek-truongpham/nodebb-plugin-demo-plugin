'use strict';

var socketIndex = require.main.require('./src/socket.io');
var EmitSocket = {
        emitPostSave: function(postData) {
            console.log(postData);
            socketIndex.server.sockets.emit('hello-wold', postData);
            console.log('abc');
        }
    };

module.exports = EmitSocket;