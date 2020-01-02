const SocketIOServer = require("socket.io");

function configSocketIO(server) {

    let io = SocketIOServer(server);   //socket.io和httpserver进行绑定

    io.on("connection", socket => {    //服务器

        socket.on("msg", (msg) => {

            io.emit("msg", msg);
        });
    });
}

module.exports.configSocketIO = configSocketIO;