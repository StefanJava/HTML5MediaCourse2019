new Vue({
    el: "#vueapp",

    mounted() {

        /**
         * @type {CanvasRenderingContext2D}
         * @private
         */
        this._previewContext2d = this.$refs.preview.getContext("2d");

        /**
         * @type {CanvasRenderingContext2D}
         * @private
         */
        this._resultContext2d = this.$refs.result.getContext("2d");
        //创建视频源
        this._video = document.createElement("video");
        this._video.src = "video.mp4";

        this._previewCanvasWidth = this.$refs.preview.width;
        this._previewCanvasHeight = this.$refs.preview.height;

        requestAnimationFrame(this._animationFrameHandler.bind(this));
    },

    methods: {

        btnPlayClicked() {
            this._video.play();
        },

        btnStopClicked() {
            this._video.pause();
        },

        _animationFrameHandler() {

            this._previewContext2d.drawImage(this._video, 0, 0, this._previewCanvasWidth, this._previewCanvasHeight);
            let srcImageData = this._previewContext2d.getImageData(0, 0, this._previewCanvasWidth, this._previewCanvasHeight);
            let destImageData = this._resultContext2d.createImageData(srcImageData.width, srcImageData.height);

            let length= srcImageData.data.byteLength;
            let rawData = srcImageData.data;
            for (let i = 0; i < length; i += 4) {
                let c = (rawData[i] + rawData[i + 1] + rawData[i + 2]) / 3;
                destImageData.data[i] = c;
                destImageData.data[i + 1] = c;
                destImageData.data[i + 2] = c;
                destImageData.data[i + 3] = 255;
            }
            this._resultContext2d.putImageData(destImageData, 0, 0);
            requestAnimationFrame(this._animationFrameHandler.bind(this));
        }
    }
});
