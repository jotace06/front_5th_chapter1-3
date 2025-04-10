// eslint-disable-next-line @typescript-eslint/no-explicit-any
type EventCallback = (...args: any) => void;

class EventBus {
  private events = new Map<string, Set<EventCallback>>();

  subscribe(event: string, callback: EventCallback) {
    if (!this.events.has(event)) {
      this.events.set(event, new Set());
    }

    this.events.get(event)?.add(callback);

    return () => {
      const callbacks = this.events.get(event);
      if (callbacks) {
        callbacks.delete(callback);

        if (callbacks.size === 0) {
          this.events.delete(event);
        }
      }
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  publish(event: string, ...args: any) {
    const callbacks = this.events.get(event);
    if (callbacks) {
      callbacks.forEach((callback) => callback(...args));
    }
  }
}

export const eventBus = new EventBus();
