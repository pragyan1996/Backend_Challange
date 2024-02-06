function sort(s) {
    let freq = [];
    for (let i = 0; i < 26; i++) freq.push(0);
    for (let c of s) {
        freq[c.charCodeAt() - 'a'.charCodeAt()]++;
    }
    let str = "";
    for (let i = 0; i < 26; i++) {
        let f = freq[i];
        for (let j = 0; j < f; j++){
            let ch = String.fromCharCode(i + 97);
            str += ch
        }
    }
    return str;
}

sort("bat")