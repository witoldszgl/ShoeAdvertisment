import EventTracker from './EventTracker';
import SceneManager from './SceneManager';
import IntroScene from './IntroScene';
import GalleryScene from './GalleryScene';
import VideoScene from './VideoScene';

export default class App {
    constructor() {
        this.init();
    }

    init() {
        // Track ad load
        EventTracker.track('ad_load');

        this.setupSceneManager();

        // Add global event listeners
        window.addEventListener('resize', this.onResize.bind(this));
        document.addEventListener('visibilitychange', this.onVisibilityChange.bind(this));
    }

    setupSceneManager() {
        const scenes = {
            intro: new IntroScene('intro-scene', this),
            gallery: new GalleryScene('gallery-scene', this),
            video: new VideoScene('video-scene', this),
        };

        this.sceneManager = new SceneManager(scenes);
        this.sceneManager.showScene('intro');
    }

    showScene(sceneName, data) {
        this.sceneManager.showScene(sceneName, data);
    }

    onResize() {
        EventTracker.track('window_resize');
    }

    onVisibilityChange() {
        if (document.visibilityState === 'hidden') {
            EventTracker.track('page_hide');
        }
    }
} 