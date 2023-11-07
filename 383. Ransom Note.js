/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    ransomNote = ransomNote.split('');
    magazine = magazine.split('');

    for (let i = 0; i < ransomNote.length; i++) {
        const letter = ransomNote[i];
        let j = magazine.indexOf(letter)
        if (j === -1) {
            return false
        } else {
            magazine.splice(j, 1)
        }
        
    }

    return true;
};

console.log(canConstruct('a', 'b'))