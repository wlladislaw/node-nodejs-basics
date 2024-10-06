import { Transform } from 'stream';
const transform = async () => {
    const stream = new Transform({
        transform(chunk, encoding, cb) {
            cb(null, chunk.toString().split('').reverse().join(''));
        },
    });
    console.log('write here text and press Enter , for end - Ctrl+D or Ctrl+Z');

    process.stdin.pipe(stream).pipe(process.stdout);

    stream.on('close', () => {
        console.log('\nDone!');
    });
};

await transform();