const {
    translateToPigLatin,
} = require("../index.js");

describe("words starting w/ different 'vowels'", () => {
    test("words statrting w/ 'a'", () => {
        expect(translateToPigLatin("apple")).toBe("appleway");
    });
    test("words starting w/ 'e'", () => {
        expect(translateToPigLatin("else")).toBe("elseway");
    });
      test("words starting w/ 'i'", () => {
        expect(translateToPigLatin("injection")).toBe("injectionway");
    });
      test("words starting w/ 'o'", () => {
        expect(translateToPigLatin("oscillates")).toBe("oscillatesway");
    });
    test("words starting w/ 'u'", () => {
        expect(translateToPigLatin("units")).toBe("unitsway");
    }); 
});

describe("words starting w/ one consonant", () => {
    test("translate 'banana' to pig latin", () => {
        expect(translateToPigLatin("banana")).toBe("ananabay");
    });
    test("translate 'cat' to pig latin", () => {
        expect(translateToPigLatin("cat")).toBe("atcay");
    });
});

describe("words starting w/ two consonants", () => {
    test("translate 'drift' to pig latin", () => {
        expect(translateToPigLatin("drift")).toBe("iftdray");
    });
});

describe("words starting w/ three consonants", () => {
    test("translate 'frenzy' to pig latin", () => {
        expect(translateToPigLatin("frenzy")).toBe("enzyfray");
    });
});

describe("lowercase conversion", () => {
    test("translate '' to pig latin", () => {
        expect(translateToPigLatin("")).toBe("");
    });
});