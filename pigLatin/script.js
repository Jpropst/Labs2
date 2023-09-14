const inputTextArea = document.getElementById("inputText");
const translateButton = document.getElementById("translateButton");
const outputText = document.getElementById("outputText");

const translateToPigLatin = (text) => {
    if (!text) {
        return "";
    }
    const words = text.split(" ");
    const pigLatinWords = words.map(translateWordToPigLatin)
    return pigLatinWords.join(" ");
}

const translateWordToPigLatin = (word) => {
    const vowels = ["a", "e", "i", "o", "u"]
    let pigLatinWord = word
    if(!word) {
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
    return pigLatinWord;
}

translateButton.addEventListener("click", () => {
    const inputText = inputTextArea.value;
    const translatedText = translateToPigLatin(inputText);
    outputText.textContent = translatedText;
});