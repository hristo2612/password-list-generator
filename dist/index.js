"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const passwordGenerator_1 = require("./util/passwordGenerator");
const bulgarianNames = fs_1.default.readFileSync(process.cwd() + '/src/names/bulgarianFirstNames.txt', { encoding: 'utf8' }).split('\n');
const stream = fs_1.default.createWriteStream(process.cwd() + '/src/dictionaries/firstNameDictionary.txt', { flags: 'a' });
// stream.write(passwordGenerator(bulgarianNames, false, '00', '99') + "\n");
// stream.write(passwordGenerator(bulgarianNames, true, '00', '99') + "\n");
// stream.write(passwordGenerator(bulgarianNames, false, '000', '999') + "\n");
// stream.write(passwordGenerator(bulgarianNames, true, '000', '999') + "\n");
// stream.write(passwordGenerator(bulgarianNames, false, '7501', '9999') + "\n");
stream.write(passwordGenerator_1.passwordGenerator(bulgarianNames, true, '7501', '9999') + "\n");
stream.end();
//# sourceMappingURL=index.js.map