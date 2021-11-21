import { Job } from './types/Job';
import { PriorityQueue } from './PriorityQueue';
import { Comparator } from './types/Comparator';

let idCounter = 0;
const priorities = new Set<number>();

while (priorities.size !== 10000) {
    priorities.add(Math.floor(Math.random() * 10000000));
}

const jobs: Job[] = [];
const jobsComparator: Comparator<Job> = (a, b) => {
    if (a.priority === b.priority) {
        return 0;
    }

    return a.priority > b.priority ? 1 : -1;
};

for (const priority of priorities) {
    jobs.push({ id: idCounter++, priority });
}

const jobsQueue = new PriorityQueue(jobsComparator, jobs);
const startTime = Date.now();

for (const job of jobsQueue) {
    console.log(`run job with priority - ${job.priority} and id - ${job.id}`);
}

const duration = new Date(startTime - Date.now());
console.log(`\nExecuting of 10000 jobs took ${duration.getSeconds()} seconds`);
