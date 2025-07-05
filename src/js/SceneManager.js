import EventTracker from './EventTracker';

export default class SceneManager {
    constructor(scenes) {
        this.scenes = scenes;
        this.currentScene = null;
    }

    showScene(sceneName, data = null) {
        if (this.currentScene) {
            this.currentScene.hide();
        }

        const newScene = this.scenes[sceneName];
        if (newScene) {
            this.currentScene = newScene;
            this.currentScene.show(data);
            EventTracker.track('scene_change', sceneName);
        } else {
            console.error(`Scene "${sceneName}" not found.`);
        }
    }
} 