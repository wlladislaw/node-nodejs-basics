import path from 'path';
import { createReadStream } from 'fs';
const read = async () => {
    const __dirname = import.meta.dirname;
    const fileDir = path.join(__dirname, 'files');

    const filePath = path.join(fileDir, 'fileToRead.txt');
    const input = createReadStream(filePath);

    input.on('readable', () => {
        const res = input.read();
        if (res !== null) process.stdout.write(res);
    });

    input.on('end', () => {
        console.log(' ');
    });
};

await read();
