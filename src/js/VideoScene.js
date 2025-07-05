import Scene from './Scene';
import videoSrc from '../assets/videos/video.mp4';

export default class VideoScene extends Scene {
    constructor(elementId, app) {
        super(elementId);
        this.app = app;
        this.videoElement = null;
    }

    initContent() {
        if (!this.videoElement) {
            this.videoElement = document.createElement('video');
            this.videoElement.src = videoSrc;
            this.videoElement.loop = true;
            this.videoElement.muted = false;
            this.videoElement.playsInline = true;
            this.element.appendChild(this.videoElement);
        }
    }

    show(data) {
        super.show(data);
        this.initContent();

        if (data && data.slideIndex !== undefined) {
            this.positionVideo(data.slideIndex);
        }
        
        this.videoElement.play().catch(error => {
            console.error("Video play failed:", error);
        });
    }

    hide() {
        super.hide();
        if (this.videoElement) {
            this.videoElement.pause();
        }
    }

    positionVideo(slideIndex) {
        this.videoElement.classList.remove('top-left', 'top-right', 'bottom-left', 'bottom-right');
        
        switch (slideIndex) {
            case 0: // Slide 1
                this.videoElement.classList.add('top-left');
                break;
            case 1: // Slide 2
                this.videoElement.classList.add('top-right');
                break;
            case 2: // Slide 3
                this.videoElement.classList.add('bottom-left');
                break;
            case 3: // Slide 4
                this.videoElement.classList.add('bottom-right');
                break;
        }
    }
} 