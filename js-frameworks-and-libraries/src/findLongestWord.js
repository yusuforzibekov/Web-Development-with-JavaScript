export function findLongestWord(phrase) {
    if (!phrase) return null;
    const words = phrase.split(/\s+/); // Split by spaces
    return _.maxBy(words, (word) => word.length); // Use Lodash's maxBy to find the longest word
}
