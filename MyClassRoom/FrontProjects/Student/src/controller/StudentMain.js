import Tpl from "../view/StudentMain.html";
import Dialog from "../../../common/Dialog";
import "../../../common/component/ClientList"
import Config from "../../../common/Config";

const StudentMain = Vue.component("student-main", {
    template: Tpl,

    data() {
        return {
            classroomName: ""
        }
    },

    mounted() {

        this._socket = io();

        this._remoteStream = new MediaStream();
        this.$refs.remote_preview.srcObject = this._remoteStream;

        this.showJoinClassroomDialog();

        this.addSocketListeners();
    },

    methods: {

        addSocketListeners() {
            this._socket.on("listClients", clients => {
                this.$refs.client_list.setClients(clients);
            });

            this._socket.on("teacherOffer", async data => {
                console.log(data);
                this._teacherId = data.from;
                this._answerPC = new RTCPeerConnection(Config.PC_INIT_CONFIG);

                this._answerPC.onicecandidate = e => {
                    if (e.candidate) {
                        console.log(e.candidate);
                        this._socket.emit("ice", {from: this._socket.id, to: this._teacherId, ice: e.candidate});
                    }
                };

                this._answerPC.ontrack = e => {
                    console.log(e);
                    this._remoteStream.addTrack(e.track);
                }

                await this._answerPC.setRemoteDescription(new RTCSessionDescription(data.offer));

                let answer = await this._answerPC.createAnswer()
                this._socket.emit("studentAnswer", {from: this._socket.id, to: this._teacherId, answer: answer});

                await this._answerPC.setLocalDescription(new RTCSessionDescription(answer));
            });

            this._socket.on("ice", data => {

                this._answerPC.addIceCandidate(new RTCIceCandidate(data.ice));
            });
        },

        showJoinClassroomDialog() {
            Dialog.showInput("请输入教室名称", name => {
                if (name) {
                    let ld = Dialog.showLoading("正在加入教室...");
                    this._socket.emit("joinClassroom", name, () => {
                        ld.modal("hide");
                        this.classroomName = name;
                        console.log("Joined in " + name + " room");
                    });
                } else {
                    this.showJoinClassroomDialog();
                }
            }, "static", false, false, "", "加入");
        }
    }
});

export default StudentMain;