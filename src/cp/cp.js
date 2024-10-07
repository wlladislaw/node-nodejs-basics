import { fork } from 'child_process';
import path from 'path';
const spawnChildProcess = async (args) => {
    const dirname = import.meta.dirname;
    const pathDir = path.join(dirname, 'files');
    const script = path.join(pathDir, 'script.js');
    const child = fork(script, args, {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
    });
    process.stdin.pipe(child.stdin);

    child.stdout.pipe(process.stdout);

    process.stdin.on('data', (data) => {
        console.log(`child received from stdin: ${data}`);
    });
};

spawnChildProcess(['someArgument1', 'someArgument2']);
