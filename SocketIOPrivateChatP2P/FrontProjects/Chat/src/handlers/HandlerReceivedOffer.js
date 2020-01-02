import SocketEvents from "../events/SocketEvents";
import Context from "../Context";
import Config from "../Config";

async function HandlerReceivedOffer(e, context, data) {

    console.log(data);

    var answerPC = new RTCPeerConnection();

    let localStream = context.getData(Context.KEY_LOCAL_MEDIA_STREAM);

    localStream.getTracks().forEach(t => {
        answerPC.addTrack(t);
    });

    context.setData(Context.KEY_ANSWER_PEER_CONNECTION, answerPC);

    let remoteStream = context.getData(Context.KEY_REMOTE_MEDIA_STREAM);

    answerPC.ontrack = e => {
        remoteStream.addTrack(e.track);
    }

    answerPC.onicecandidate = e => {
        if (e.candidate) {
            context.socketConnector.emit(SocketEvents.ANSWER_ICE, {receiver: data.sender, ice: e.candidate});
        }
    };

    answerPC.ondatachannel = function(e) {
        let dataChannel = e.channel;
        dataChannel.onmessage = ev => {
            console.log(ev);
        };
    };

    await answerPC.setRemoteDescription(new RTCSessionDescription(data.offer));
    var answer = await answerPC.createAnswer();
    context.socketConnector.emit(SocketEvents.ANSWER, {answer: answer, receiver: data.sender});
    await answerPC.setLocalDescription(new RTCSessionDescription(answer));

}

export default HandlerReceivedOffer;