const [version, env] = process.argv.slice(2);

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

let listString = '';

rl.on('line', line => {
    listString += line.trim();
}).on('close', () => {
    const artifactList = JSON.parse(listString);

    for (let artifact of artifactList['artifacts']) {
        if (artifact.name === 'rmg-' + version + '-' + env) {
            console.log(artifact['archive_download_url']);
        }
    }
});

