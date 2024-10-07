const parseEnv = () => {
    const envs = process.env;
    let res = [];
    for (const env in envs) {
        if (env.startsWith('RSS_')) {
            res.push(env + '=' + envs[env]);
        }
    }
    console.log(res.join('; '));
};

parseEnv();
