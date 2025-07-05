export default class EventTracker {
    static track(eventName, eventDetail = '') {
        const message = eventDetail ? `${eventName}:${eventDetail}` : eventName;
        console.log(`Event: ${message}`);
    }
} 