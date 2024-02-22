var longestStrChain = function (words) {
    words.sort((a, b) => a.length - b.length);
    return util(words, 0);
};

function util(arr, index) {
    if (index == arr.length - 1) return 1;
    let max = 1;
    for (let i = index + 1; i < arr.length; i++) {
        if (isChain(arr[index], arr[i])) {
            let chainlen = 1 + util(arr, i);
            max = Math.max(max, chainlen);
        }
    }
    return max;
}

function isChain(str1, str2) {
    if (str2.length - str1.length != 1) return false;
    let p1 = 0;
    let p2 = 0;
    while (p1 < str1.length && p2 < str2.length) {
        if (str1[p1] != str2[p2]) {
            p2++;
        } else {
            p1++;
            p2++;
        }
    }
    return p1 == str1.length;
}
console.log(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]));
