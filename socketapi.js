const io = require( "socket.io" )();
const socketapi = {
    io: io
};
const {v4:uuidv4}=require('uuid')

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    socket.on('join-room',(roomId,userId,)=>{
        // console.log("joined the room")
        socket.join(roomId)
        socket.to(roomId).emit('user-connected', userId,socket.id);
        socket.on('msg',msg=>{
            io.to(roomId).emit('createMsg',msg)
        })
    })
});
// end of socket.io logic

module.exports = socketapi;