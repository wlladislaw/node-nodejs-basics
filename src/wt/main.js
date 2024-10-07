import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
const performCalculations = async () => {
    const coresLength = os.cpus().length;
    const __dirname = import.meta.dirname;
    const workerPath = path.join(__dirname, 'worker.js');
    const promisedWorkers = [];
    const workers = [];

    for (let i = 0; i < coresLength; i++) {
        promisedWorkers.push(handleThread(10 + i));
    }
    function handleThread(data) {
        return new Promise((resolve, reject) => {
            const worker = new Worker(workerPath);
            workers.push(worker);
            worker.postMessage(data);

            worker.on('message', (res) => {
                resolve({ status: 'resolved', data: res });
            });

            worker.on('error', (err) => {
                reject({ status: 'error', data: null });
            });
            worker.on('exit', (code) => {
                if (code !== 0) {
                    reject(new Error(`Worker stopped with exit code ${code}`));
                }
            });
        });
    }

    Promise.allSettled(promisedWorkers)
        .then((results) => {
            const finalResults = results.map((res) => {
                if (res.status === 'fulfilled') {
                    return res.value;
                } else {
                    return res.reason;
                }
            });
            console.log(finalResults);
        })
        .catch((err) => {
            console.error('error in promises:', err);
        })
        .finally(() => {
            workers.forEach((worker) => worker.terminate());
        });
};

await performCalculations();
