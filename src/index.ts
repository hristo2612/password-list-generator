import fs from 'fs';
import { passwordGenerator } from './util/passwordGenerator';

const bulgarianNames = fs.readFileSync(process.cwd() + '/src/names/bulgarianFirstNames.txt', { encoding: 'utf8' }).split('\n');

const stream = fs.createWriteStream(process.cwd() + '/src/dictionaries/firstNameDictionary.txt', {flags:'a'});

// stream.write(passwordGenerator(bulgarianNames, false, '00', '99') + "\n");
// stream.write(passwordGenerator(bulgarianNames, true, '00', '99') + "\n");

// stream.write(passwordGenerator(bulgarianNames, false, '000', '999') + "\n");
// stream.write(passwordGenerator(bulgarianNames, true, '000', '999') + "\n");

// stream.write(passwordGenerator(bulgarianNames, false, '7501', '9999') + "\n");
stream.write(passwordGenerator(bulgarianNames, true, '7501', '9999') + "\n");

stream.end();