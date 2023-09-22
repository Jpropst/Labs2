const translateToPigLatin = (text) => {
    if (!text) {
        return "";
    }
    const words = text.split(/(\s+)/);
    const pigLatinWords = words.map(translateWordToPigLatin);
    const translatedText = pigLatinWords.join(" ");
    return translatedText.toLowerCase();
};

const translateWordToPigLatin = (word) => {
    const vowels = ["a", "e", "i", "o", "u"]
    let pigLatinWord = word.toLowerCase();
    if (!word) {
        return word;
    }
    if (vowels.includes(word[0].toLowerCase())) {
        pigLatinWord += "way";
    } else {
        let consonantCluster = "";
        let i = 0;
        while (i < word.length && !vowels.includes(word[i].toLowerCase())) {
            consonantCluster += word[i];
            i++;
        }
        pigLatinWord = word.slice(i) + consonantCluster + "ay";
    }
    console.log(pigLatinWord);
    return pigLatinWord;
};

module.exports = {
    translateToPigLatin
};