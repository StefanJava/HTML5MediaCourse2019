class PlayerCanvas {

    constructor(width, height) {
        this._canvas = document.createElement("canvas");
        this._canvas.width = width;
        this._canvas.height = height;

        this._canvasWidth = width;
        this._canvasHeight = height;

        this._CAMERA_VIDEO_WIDTH = 400;
        this._CAMERA_VIDEO_HEIGHT = 300;

        this._context2d = this._canvas.getContext("2d");  //定义画板
        requestAnimationFrame(this._animationFrameHandler.bind(this));  //按照屏幕刷新的频率不断录制
    }

    /**
     *
     * @param video {HTMLVideoElement}
     */
    setScreenVideo(video) {
        this._screenVideo = video;
    }

    setCameraVideo(video) {
        this._cameraVideo = video;
    }

    _animationFrameHandler() {

        if (this._screenVideo) {  //画屏幕

            this._context2d.drawImage(this._screenVideo, 0, 0, this._canvasWidth, this._canvasHeight);
        }

        if (this._cameraVideo) {   //画头像

            this._context2d.drawImage(this._cameraVideo, this._canvasWidth - this._CAMERA_VIDEO_WIDTH,
                                        this._canvasHeight - this._CAMERA_VIDEO_HEIGHT,
                                        this._CAMERA_VIDEO_WIDTH, this._CAMERA_VIDEO_HEIGHT);
        }
        requestAnimationFrame(this._animationFrameHandler.bind(this));
    }

    /**
     *
     * @returns {HTMLCanvasElement}
     */
    get canvas() {
        return this._canvas;
    }
}

module.exports = PlayerCanvas;