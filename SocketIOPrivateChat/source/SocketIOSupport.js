const SocketIOServer = require("socket.io");

function configSocketIO(server) {

    let io = SocketIOServer(server);   //socket.io和httpserver进行绑定

    function broadcastClientList() {
        io.of("/").clients((err, clients) => {
            if (!err) {
                io.emit("listClients", clients);  //所有用户广播
            }
        });
    }

    io.on("connection", socket => {    //服务器

        broadcastClientList();

        socket.on("msg", data => {
            if (data.receiver && data.msg) {
                console.log(data);
                io.to(data.receiver).emit("msg", data);
                socket.emit("msg", data);
            }
        });

        socket.on("disconnect", () => {
            broadcastClientList();
        });
    });
}

module.exports.configSocketIO = configSocketIO;