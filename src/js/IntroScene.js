import Scene from './Scene';
import headlineImg from '../assets/images/headline.png';
import { gsap } from 'gsap';

export default class IntroScene extends Scene {
    constructor(elementId, app) {
        super(elementId);
        this.app = app;
        this.initContent();
    }

    initContent() {
        const headline = new Image();
        headline.src = headlineImg;
        headline.classList.add('intro-headline');
        this.element.appendChild(headline);
    }

    show(data) {
        super.show(data);
        gsap.to(this.element.querySelector('.intro-headline'), {
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
        });
        setTimeout(() => {
            this.app.showScene('gallery');
        }, 8000); // 8 seconds
    }
} 