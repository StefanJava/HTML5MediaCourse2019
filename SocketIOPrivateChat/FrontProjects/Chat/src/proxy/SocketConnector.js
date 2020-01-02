import Events from "../Events";

class SocketConnector {

    constructor() {    //连接服务器
        this._socket = io();
        this._socket.on("listClients", clients => {
           $(this).trigger(Events.LIST_CLENTS, {clients: clients, currentSocketId: this._socket.id});
        });

        this._socket.on("msg", data => {
            // console.log(data);
            $(this).trigger(Events.MSG, data);
        });

    }

    get socketId() {
        return this._socket.id;
    }

    sendMsg(msg, targetSocketId) {  //发送到服务器
        this._socket.emit("msg", {receiver: targetSocketId, sender: this._socket.id, msg: msg});
    }

}

export default SocketConnector;