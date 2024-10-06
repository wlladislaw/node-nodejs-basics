import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
const compress = async () => {
    const __dirname = import.meta.dirname;
    const fileDir = path.join(__dirname, 'files');
    const gz = createGzip();
    const filePath = path.join(fileDir, 'fileToCompress.txt');
    const input = createReadStream(filePath);
    const res = createWriteStream(path.join(fileDir, 'archive.gz'));
    input.pipe(gz).pipe(res);
    res.on('finish', () => {
        console.log('file compressed to archive.gz in files directory');
    });
    gz.on('error', (err) => {
        console.error(`error compression: ${err.message}`);
    });
};

await compress();