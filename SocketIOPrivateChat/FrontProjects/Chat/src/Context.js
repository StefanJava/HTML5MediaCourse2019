import SocketConnector from "./proxy/SocketConnector";

class Context {   //用于共享数据    共享SocketConnection

    constructor() {
        this._socketConnector = new SocketConnector();
    }

    get socketConnector() {
        return this._socketConnector;
    }
}

export default Context;