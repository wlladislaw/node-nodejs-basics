import fs from 'fs';
import path from 'path';
const create = async () => {
    const __dirname = import.meta.dirname;
    const dir = path.join(__dirname, 'files');
    try {
        if (fs.existsSync(path.join(dir, 'fresh.txt'))) {
            const err = new Error('FS operation failed');
            throw err;
        }
        fs.writeFile(path.join(dir, 'fresh.txt'), 'I am fresh and young', () => {
            console.log('File created');
        });
    } catch (error) {
        console.error(error.message);
    }
};

await create();
