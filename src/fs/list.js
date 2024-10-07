import fs from 'fs';
import path from 'path';
const list = async () => {
    try {
        const __dirname = import.meta.dirname;

        const filesDir = path.join(__dirname, 'files');

        if (!fs.existsSync(filesDir)) {
            throw new Error('FS operation failed');
        }
        const files = await fs.promises.readdir(filesDir);
        for (const file of files) {
            console.log(file);
        }
    } catch (error) {
        console.error(error.message);
    }
};

await list();
