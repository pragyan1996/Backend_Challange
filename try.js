var firstUniqChar = function (s) {
    let hm = {};
    for (let ch of s) {
        console.log(ch, hm);
        if (hm[ch]) hm[ch] += 1;
        else hm[ch] = 1;
    }
    console.log(hm);
    for (let ch in s) {
        let chr = s[ch];
        if (hm[chr] == 1) return ch;
    }
    return -1;
};

console.log(firstUniqChar("loveleetcode"));