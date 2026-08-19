// This AsyncQueue ensures sequential execution of asynchronous tasks using a FIFO queue. It prevents concurrent execution with a running flag and supports pause/resume by halting the processing loop without cancelling in-flight tasks
class AsyncQueue {
    constructor() {
        this.queue = [];
        this.running = false;
        this.pause = false;
    }

    async run() {
        if (this.running || this.pause) {
            return;
        }

        this.running = true;

        while (this.queue.length && !this.paused()) {
            try {
                let task = this.queue.shift();
                await task();
            } catch (e) {
                console.error("Task error:", e);
            }
        }

        this.running = false;
    }

    add(task) {
        this.queue.push(task);
        this.run(); // Automatically start if not running or paused
    }

    paused() {
        return this.pause;
    }

    pauseQueue() {
        this.pause = true;
    }

    resume() {
        if (!this.pause) return;
        this.pause = false;
        this.run(); // Resume processing the queue
    }
}
