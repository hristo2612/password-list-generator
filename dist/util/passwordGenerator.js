"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numberGenerator_1 = require("./numberGenerator");
exports.passwordGenerator = (names, lowercase, firstNumber, finalNumber) => {
    const passwords = [];
    let currentNumber = firstNumber;
    names.forEach((name) => {
        let current;
        while (currentNumber !== finalNumber) {
            current = (lowercase ? name.toLowerCase() : name);
            if ((current + currentNumber).length >= 8) {
                passwords.push(current + currentNumber);
            }
            currentNumber = numberGenerator_1.numberIterator(currentNumber);
        }
        current = (lowercase ? name.toLowerCase() : name);
        if ((current + finalNumber).length >= 8) {
            passwords.push(current + finalNumber);
        }
        currentNumber = firstNumber;
    });
    return passwords.join('\n');
};
//# sourceMappingURL=passwordGenerator.js.map