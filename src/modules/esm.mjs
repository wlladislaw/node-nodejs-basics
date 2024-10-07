import path from 'path';
import { release, version } from 'os';
import { createServer } from 'http';
import { createRequire } from 'module';
import './files/c.js';

const random = Math.random();

let unknownObject;

const require = createRequire(import.meta.url);
const a = require('./files/a.json');
const b = require('./files/b.json');

if (random > 0.5) {
    unknownObject = a;
} else {
    unknownObject = b;
}

const __filename = import.meta.filename;
const __dirname = import.meta.dirname;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
