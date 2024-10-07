import fs from 'fs';
import path from 'path';
const copy = async () => {
    const __dirname = import.meta.dirname;

    const filesDir = path.join(__dirname, 'files');
    const resDir = path.join(__dirname, 'files_copy');
    try {
        if (!fs.existsSync(filesDir) || fs.existsSync(resDir)) {
            throw new Error('FS operation failed');
        }
        await fs.promises.mkdir(resDir, { recursive: true });

        const files = await fs.promises.readdir(filesDir, () => {});

        for (const file of files) {
            const srcPath = path.join(filesDir, file);
            const destPath = path.join(resDir, file);
            await fs.promises.copyFile(srcPath, destPath);
        }
    } catch (error) {
        console.error(error.message);
    }
};

await copy();
