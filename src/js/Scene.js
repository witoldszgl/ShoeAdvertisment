export default class Scene {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
    }

    show(data) {
        this.element.classList.add('active');
    }

    hide() {
        this.element.classList.remove('active');
    }
} 