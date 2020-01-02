// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const jQuery = window.jQuery = require("jquery");
require("popper.js");
require("bootstrap");
const Vue = require("vue/dist/vue");
const electron = require("electron");
const fs = require("fs");
const SCREEN_WIDTH = 1920;
const SCRREN_HEIGHT = 1080;
const PlayerCanvas = require("./PlayerCanvas")

new Vue({
    el: "#vueapp",
    data: {
        recording: false
    },

    mounted() {
        this._playerCanvas = new PlayerCanvas(SCREEN_WIDTH, SCRREN_HEIGHT);
    },

    methods: {

        async btnStartRecordClicked(e) {

            this._stream = new MediaStream();    //创建合成流

            await this.attachAudioStream();

            this._cameraStream = await navigator.mediaDevices.getUserMedia({audio: false, video: true});

            this._playerCanvas.setCameraVideo(this.createVideoElementWithStream(this._cameraStream)); //设置头像

            this._screenStream = await navigator.mediaDevices.getUserMedia({
                audio: false,
                video: {
                    mandatory: {
                        chromeMediaSource: 'desktop',
                        minWidth: SCREEN_WIDTH,
                        maxWidth: SCREEN_WIDTH,
                        minHeight: SCRREN_HEIGHT,
                        maxHeight: SCRREN_HEIGHT
                    }
                }
            });

            this._playerCanvas.setScreenVideo(this.createVideoElementWithStream(this._screenStream));  //设置屏幕

            let playerCanvasStream = this._playerCanvas.canvas.captureStream();      //捕获屏幕和头像
            playerCanvasStream.getTracks().forEach(t => this._stream.addTrack(t));   //添加视频轨道
            this.$refs.preview.srcObject = playerCanvasStream;

            this.startRecord();
        },

        async attachAudioStream() {
            this._audioStream = await navigator.mediaDevices.getUserMedia({audio: true, video: false});
            this._audioStream.getAudioTracks().forEach(value => this._stream.addTrack(value));   //添加音频轨道
        },

        createVideoElementWithStream(stream) {
            let video = document.createElement("video");
            video.autoplay = true;
            video.srcObject = stream;
            return video;
        },

        startRecord() {

            this._recorder = new MediaRecorder(this._stream, {mimeType: "video/webm;codecs=h264"});
            this._recorder.ondataavailable = async e => {   //监听录屏数据
                let path = electron.remote.dialog.showSaveDialogSync(electron.remote.getCurrentWindow(), {
                    title: "保存文件",
                    defaultPath: "ScreenRecord.webm"
                });
                if (path) {
                    fs.writeFileSync(path, new Uint8Array(await e.data.arrayBuffer()));
                }
            };
            this._recorder.start();
            this.recording = true;
        },

        btnStopRecordClicked(e) {
            this._recorder.stop();
            this.recording = false;
        }
    }
});