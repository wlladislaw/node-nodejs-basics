import path from 'path';
import { createReadStream, createWriteStream, existsSync } from 'fs';
import { createGunzip } from 'zlib';
const decompress = async () => {
    const __dirname = import.meta.dirname;
    const fileDir = path.join(__dirname, 'files');
    const gunzip = createGunzip();
    const filePath = path.join(fileDir, 'archive.gz');
    if (!existsSync(filePath)) {
        console.log('Compress archive for decompress func!!!');
        return;
    }
    const input = createReadStream(filePath);

    input.on('error', (error) => {
        console.error(error.message);
    });
    const res = createWriteStream(path.join(fileDir, 'fileToCompress.txt'));

    input.pipe(gunzip).pipe(res);
    res.on('finish', () => {
        console.log('file decompressed in files directory');
    });
};

await decompress();