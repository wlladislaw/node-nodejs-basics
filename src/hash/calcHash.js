import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import path from 'path';

const calculateHash = async () => {
    const __dirname = import.meta.dirname;
    const fileDir = path.join(__dirname, 'files');

    const filePath = path.join(fileDir, 'fileToCalculateHashFor.txt');
    const hash = createHash('sha256');
    const input = createReadStream(filePath);

    input.on('readable', () => {
        const data = input.read();

        if (data) hash.update(data);
        else {
            console.log(`Hash hex - ${hash.digest('hex')}`);
        }
    });
};

await calculateHash();
