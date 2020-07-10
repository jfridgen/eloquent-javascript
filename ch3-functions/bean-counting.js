function countChar(string, char) {
    let count = 0;
    for(let charPos = 0; charPos <= (string.length - 1); charPos++) {
        if(string[charPos] == char) {
            count++;
        }
    }
    return count;
}

function countBs(string) {
    return countChar(string, "B");
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
