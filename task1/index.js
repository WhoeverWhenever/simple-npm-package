function findMostOccuredLetter(str) {
    let regEx = /[a-zA-Z]+/g;
    let onlyLettersString = [...str.match(regEx)].join("").toLowerCase();
    let lettersOccuring = new Map();
    for (let i = 0; i < onlyLettersString.length; i++) {
        if (lettersOccuring.has(onlyLettersString[i])) {
            lettersOccuring.set(onlyLettersString[i], lettersOccuring.get(onlyLettersString[i]) + 1);
        }
        else {
            lettersOccuring.set(onlyLettersString[i], 1);
        }
    }

    let maxOccures = Math.max(...lettersOccuring.values());
    for (let [key, value] of lettersOccuring.entries()) {
        if (value !== maxOccures) {
            lettersOccuring.delete(key);
        }
    }
    return Object.fromEntries(lettersOccuring);
}

module.exports = findMostOccuredLetter;