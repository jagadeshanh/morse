const MORSE_CODE = {
    ".-"   : "a",
    "-..." : "b",
    "-.-." : "c",
    "-.."  : "d",
    "."    : "e",
    "..-." : "f",
    "--."  : "g",
    "...." : "h",
    ".."   : "i",
    ".---" : "j",
    "-.-"  : "k",
    ".-.." : "l",
    "--"   : "m",
    "-."   : "n",
    "---"  : "o",
    ".--." : "p",
    "--.-" : "q",
    ".-."  : "r",
    "..."  : "s",
    "-"    : "t",
    "..-"  : "u",
    "...-" : "v",
    ".--"  : "w",
    "-..-" : "x",
    "-.--" : "y",
    "--.." : "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
    "|"    : " "
};


function encode(data) {
    let message = '';
    data.toLowerCase().split('').forEach(c => {
        message += ' ' + Object.keys(MORSE_CODE)[Object.values(MORSE_CODE).indexOf(c)];
    });
    return message.trim();
}

function decode(data) {
    let words = (data).split(' ');
    let letters = words.map((w) => w.split(' '));
    let decoded = [];
    for (let i = 0; i < letters.length; i++) {
        decoded[i] = [];
        for (var x = 0; x < letters[i].length; x++) {
            if (MORSE_CODE[letters[i][x]]) {
                decoded[i].push(MORSE_CODE[letters[i][x]]);
            }
        }
    }

    return decoded.map(arr => arr.join('')).join('');
}

module.exports = {
    MORSE_CODE,
    encode,
    decode
};