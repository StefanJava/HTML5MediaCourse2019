/*(async function () {

    let stream = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
    document.querySelector("video").srcObject = stream;
})();*/

new Vue({
    el: "#vueapp",
    data: {

    },

    mounted() {   //声明周期函数
        this._initVueApp();
    },

    methods: {

        async _initVueApp() {
            this.$refs.video.srcObject = await navigator.mediaDevices.getUserMedia({video: true, audio: false});

            this._context2d = this.$refs.canvas.getContext("2d");
        },

        btnTakePhotoClicked() {
            this._context2d.drawImage(this.$refs.video, 0, 0, this.$refs.canvas.width, this.$refs.canvas.height);
        }
    }
});
