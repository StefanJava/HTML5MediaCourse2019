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

        socket.on("offer", data => {
            let receiver = data.receiver;
            if (receiver) {
                io.to(receiver).emit("offer", data);
            }
        });

        socket.on("answer", data => {
            let receiver = data.receiver;
            if (receiver) {
                io.to(receiver).emit("answer", data);
            }
        });

        socket.on("offerIce", data => {
            let receiver = data.receiver;
            if (receiver) {
                io.to(receiver).emit("offerIce", data);
            }
        });

        socket.on("answerIce", data => {
            let receiver = data.receiver;
            if (receiver) {
                io.to(receiver).emit("answerIce", data);
            }
        });
    });
}

module.exports.configSocketIO = configSocketIO;