import fs from 'fs';
import path from 'path';
const read = async () => {
    try {
        const __dirname = import.meta.dirname;

        const filesDir = path.join(__dirname, 'files');
        const pathFileToRead = path.join(filesDir, 'fileToRead.txt');

        if (!fs.existsSync(pathFileToRead)) {
            throw new Error('FS operation failed');
        }
        const fileContent = await fs.promises.readFile(pathFileToRead, { encoding: 'utf8' });
        console.log(fileContent);
    } catch (error) {
        console.error(error.message);
    }
};

await read();
