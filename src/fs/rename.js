import fs from 'fs';
import path from 'path';
const rename = async () => {
    try {
        const __dirname = import.meta.dirname;

        const filesDir = path.join(__dirname, 'files');
        const currPathToRename = path.join(filesDir, 'wrongFilename.txt');
        const newPathToRename = path.join(filesDir, 'properFilename.md');

        if (!fs.existsSync(currPathToRename) || fs.existsSync(newPathToRename)) {
            throw new Error('FS operation failed');
        }
        await fs.promises.rename(currPathToRename, newPathToRename);
    } catch (error) {
        console.error(error.message);
    }
};

await rename();
