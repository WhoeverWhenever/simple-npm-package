function findMostOccuredLetter(str) {
    let regEx = /[a-zA-Z]+/g;
    let onlyLettersString = [...str.match(regEx)].join("").toLowerCase();
    let lettersOccuring = {};
    for (let i = 0; i < onlyLettersString.length; i++) {
        if (onlyLettersString[i] in lettersOccuring) {
            lettersOccuring[onlyLettersString[i]] += 1;
        }
        else {
            lettersOccuring[onlyLettersString[i]] = 1;
        }
    }

    let maxOccures = Math.max(...Object.values(lettersOccuring));
    for (let [key, value] of Object.entries(lettersOccuring)) {
        if (value !== maxOccures) {
            delete lettersOccuring[key];
        }
    }
    return lettersOccuring;
}

module.exports = findMostOccuredLetter;