const SocketIOServer = require("socket.io");

let roomTeacherMap = new Map();

function configSocketIO(server) {

    let io = SocketIOServer(server);   //socket.io和httpserver进行绑定

    function listClients(roomName) {
        io.to(roomName).clients((err, clients) => {
            if (!err) {
                io.to(roomName).emit("listClients", clients);
            }
        });
    }

    io.on("connection", socket => {    //服务器

        socket.on("msg", (msg) => {

            io.emit("msg", msg);
        });

        socket.on("createClassroom", (name, callback) => {
            if (!io.sockets.adapter.rooms[name]) {
                socket.join(name);
                listClients(name);

                roomTeacherMap.set(name, socket.id);
                callback(true);
            } else {
                callback(false);
            }

            socket.on("disconnection", function () {
                roomTeacherMap.delete(name);
            })

        });

        socket.on("joinClassroom", (name, callback) => {
            socket.join(name);   //进入聊天室
            callback();
            listClients(name);
            io.to(roomTeacherMap.get(name)).emit("studentJoinedIn", {studentSid: socket.id});   //通知有人进入
        });

        socket.on("teacherOffer", data => {
            io.to(data.to).emit("teacherOffer", data);
        });

        socket.on("studentAnswer", data => {
            io.to(data.to).emit("studentAnswer", data);
        });

        socket.on("ice", data => {
            console.log(data.ice);
            io.to(data.to).emit("ice", data);
        });
    });
}

module.exports.configSocketIO = configSocketIO;