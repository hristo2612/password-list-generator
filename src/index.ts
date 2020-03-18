import fs from 'fs';

const output = fs.readFileSync(process.cwd() + '/src/sample.txt', { encoding: 'utf8' });
console.log(output);