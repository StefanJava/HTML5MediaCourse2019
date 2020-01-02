import Config from "../../../common/Config";

class StudentConnection {

    constructor(socket, studentSid, stream) {
        this._socket = socket;
        this._studentSid = studentSid;
        this._stream = stream;

        this.asyncInit();
    }

    async asyncInit() {
        this._offerPC = new RTCPeerConnection(Config.PC_INIT_CONFIG);

        this._offerPC.onicecandidate = e => {

            if (e.candidate) {
                console.log(e.candidate);
                this._socket.emit("ice", {from: this._socket.id, to: this._studentSid, ice: e.candidate});
            }
        };

        this._stream.getTracks().forEach(t => {
            this._offerPC.addTrack(t);
        });

        let offer = await this._offerPC.createOffer();
        this._socket.emit("teacherOffer", {from: this._socket.id, to: this._studentSid, offer: offer});
        await this._offerPC.setLocalDescription(new RTCSessionDescription(offer));
    }

    async studentAnswerHandler(data) {
        await this._offerPC.setRemoteDescription(new RTCSessionDescription(data.answer));

        console.log(data);
    }

    iceHandler(data) {
        this._offerPC.addIceCandidate(new RTCIceCandidate(data.ice));
    }
}

export default StudentConnection;