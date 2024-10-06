import path from 'path';
import { createWriteStream } from 'fs';
const write = async () => {
    const __dirname = import.meta.dirname;
    const fileDir = path.join(__dirname, 'files');

    const filePath = path.join(fileDir, 'fileToWrite.txt');
    const stream = createWriteStream(filePath, { flags: 'a' });
    console.log('write here text for file, for end press - Ctrl+D or Ctrl+Z');

    process.stdin.pipe(stream);

    stream.on('close', () => {
        console.log('\n Done!');
    });
};

await write();