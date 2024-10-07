import path from 'path';
import fs from 'fs';
const remove = async () => {
    try {
        const __dirname = import.meta.dirname;
        const filesDir = path.join(__dirname, 'files');
        const fileToRemove = path.join(filesDir, 'fileToRemove.txt');
        if (!fs.existsSync(fileToRemove)) {
            throw new Error('FS operation failed');
        }
        await fs.promises.rm(fileToRemove);
    } catch (error) {
        console.error(error.message);
    }
};

await remove();
