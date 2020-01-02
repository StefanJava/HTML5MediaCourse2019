import SocketConnector from "./net/SocketConnector";
import Events from "./events/Events";
import HandlerReceivedOffer from "./handlers/HandlerReceivedOffer";
import HandlerStartChatSession from "./handlers/HandlerStartChatSession";
import HandlerReceivedAnswer from "./handlers/HandlerReceivedAnswer";
import HandlerReceivedOfferIce from "./handlers/HandlerReceivedOfferIce";
import HandlerReceivedAnswerIce from "./handlers/HandlerReceivedAnswerIce";

class Context {   //用于共享数据    共享SocketConnection

    addListeners() {
        let jqThis = $(this);

        jqThis.on(Events.RECEIVED_OFFER, HandlerReceivedOffer);
        jqThis.on(Events.RECEIVED_OFFER_ICE, HandlerReceivedOfferIce);
        jqThis.on(Events.RECEIVED_ANSWER, HandlerReceivedAnswer);
        jqThis.on(Events.RECEIVED_ANSWER_ICE, HandlerReceivedAnswerIce);
        jqThis.on(Events.START_CHAT_SESSION, HandlerStartChatSession);
    }

    constructor() {

        this._jqThis = $(this);
        this._sharedData = new Map();
        this._socketConnector = new SocketConnector(this)
        this.addListeners();

    }

    setData(k, v) {
        this._sharedData.set(k, v);
    }

    getData(k) {
        return this._sharedData.get(k);
    }

    fire(type, data) {
        console.log("Fire event" + type);
        this._jqThis.trigger(type, [this, data]);
    }

    get socketConnector() {
        return this._socketConnector;
    }

}

Context.KEY_OFFER_PEER_CONNECTION = "offerPC";
Context.KEY_ANSWER_PEER_CONNECTION = "answerPC";
Context.KEY_DATA_CHANNEL = "dataChannel";
Context.KEY_LOCAL_MEDIA_STREAM = "localMediaStream";
Context.KEY_REMOTE_MEDIA_STREAM = "remoteMediaStream";

export default Context;