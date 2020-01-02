import SocketEvents from "../events/SocketEvents";
import Context from "../Context";
import Config from "../Config";

/**
 *
 * @param e
 * @param context {Context}
 * @param data
 * @constructor
 */
async function HandlerStartChatSession(e, context, data) {

    let offerPC = new RTCPeerConnection(Config.PC_INIT_CONFIG);

    context.setData(Context.KEY_OFFER_PEER_CONNECTION, offerPC);

    offerPC.onicecandidate = e => {
        if (e.candidate) {
            context.socketConnector.emit(SocketEvents.OFFER_ICE, {receiver: data, ice: e.candidate});
        }
    };

    let remoteStream = context.getData(Context.KEY_REMOTE_MEDIA_STREAM);

    offerPC.ontrack = e => {
        remoteStream.addTrack(e.track);
    };

    let stream = context.getData(Context.KEY_LOCAL_MEDIA_STREAM);
    stream.getTracks().forEach(t => {
        offerPC.addTrack(t);
    });

    /*let dataChannel = offerPC.createDataChannel("MessageChannel");
    dataChannel.onopen = function(e) {
       dataChannel.send("Hello RTC");
    }
    context.setData(Context.KEY_DATA_CHANNEL, dataChannel);*/

    let offer = await offerPC.createOffer();
    context.socketConnector.emit(SocketEvents.OFFER, {receiver: data, offer: offer});

    await offerPC.setLocalDescription(new RTCSessionDescription(offer));

}

export default HandlerStartChatSession;