const parseArgs = () => {
    const currArgs = process.argv;
    const args = [];
    for (let index = 0; index < currArgs.length; index++) {
        const element = currArgs[index];
        if (element.startsWith('--')) {
            args.push(element.slice(2) + ' ' + 'is' + ' ' + currArgs[index + 1]);
            continue;
        }
    }
    console.log(args.join(', '));
};

parseArgs();
