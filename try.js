function max(a, s, e) {
    let max = a[s];
    for (let i = s + 1; i <= e; i++) {
        max = max < a[i] ? a[i] : max;
    }
    return max;
}
function sum(a) {
    let sum = 0;
    for (let i of a) sum += i;
    return sum;
}
var maxSumAfterPartitioning = function (arr, k) {
    let ans = [], n = arr.length;
    for (let i = 0; i < n; i++) ans.push(0);
    for (let i = n - 1; i >= 0; i--) {
        let maxP = Math.min(n - i, k);
        let maxi = -1;
        for (let j = 0; j < maxP; j++) {
            let t = max(arr, i, i + j);
            console.log(t);
            if (i == n - 1) {
                maxi = Math.max(maxi, t * (j + 1));
            }
            else {
                maxi = Math.max(maxi, t * (j + 1) + ans[i + j + 1]);
            }
            // console.log(maxi);
        }
        ans[i] = maxi;
    }
    console.log(ans);
    return sum(ans);
};

console.log(maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10],3));