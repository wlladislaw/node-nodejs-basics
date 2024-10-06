import { parentPort } from 'worker_threads';
const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = () => {
    parentPort.on('message', (n) => {
        const res = nthFibonacci(n);
        parentPort.postMessage(res);
    });
};

sendResult();
