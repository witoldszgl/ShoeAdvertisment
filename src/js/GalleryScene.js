import Scene from './Scene';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import EventTracker from './EventTracker';
import { gsap } from 'gsap';

// Import assets
import ctaImg from '../assets/images/cta.png';
import shadowImg from '../assets/images/shadow.png';
import shoe1 from '../assets/images/shoe1.png';
import shoe2 from '../assets/images/shoe2.png';
import shoe3 from '../assets/images/shoe3.png';
import shoe4 from '../assets/images/shoe4.png';

export default class GalleryScene extends Scene {
    constructor(elementId, app) {
        super(elementId);
        this.app = app;
        this.images = [shoe1, shoe2, shoe3, shoe4];
        this.initContent();
    }

    initContent() {
        const galleryHTML = `
            <div class="swiper">
                <div class="swiper-wrapper">
                    ${this.images.map(img => `<div class="swiper-slide"><img src="${img}" alt="Shoe"></div>`).join('')}
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        `;
        this.element.innerHTML = galleryHTML;

        const cta = new Image();
        cta.src = ctaImg;
        cta.classList.add('cta-button');
        this.element.appendChild(cta);

        const shadow = new Image();
        shadow.src = shadowImg;
        shadow.classList.add('shadow');
        this.element.appendChild(shadow);

        cta.addEventListener('click', () => {
            EventTracker.track('user_interaction', 'cta_click');
            // Add action for CTA click if any
        });
    }

    show(data) {
        super.show(data);
        this.initSwiper();
        this.startCtaAnimation();
    }

    hide() {
        super.hide();
        if (this.ctaAnimation) {
            this.ctaAnimation.kill();
        }
    }

    startCtaAnimation() {
        const cta = this.element.querySelector('.cta-button');
        this.ctaAnimation = gsap.to(cta, {
            scale: 1.05,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
        });
    }

    initSwiper() {
        this.swiper = new Swiper(this.element.querySelector('.swiper'), {
            modules: [Navigation],
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                click: (swiper, event) => {
                    const clickedSlide = event.target.closest('.swiper-slide');
                    if (clickedSlide) {
                        const slideIndex = parseInt(clickedSlide.dataset.swiperSlideIndex, 10);
                        EventTracker.track('user_interaction', `slide_click:${slideIndex + 1}`);
                        this.app.showScene('video', { slideIndex: slideIndex });
                    }
                },
            },
        });
    }
} 