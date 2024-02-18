/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
    let hm = {};
    for (let ele of arr) {
        if (hm[ele]) { hm[ele]++; }
        else hm[ele] = 1;
    }
    let arr1 = [];
    for (let ele in hm) {
        arr1.push([ele, hm[ele]]);
    }
    arr1.sort((a, b) => a[1] - b[1]);
    // console.log(hm, arr1);
    for (let ele of arr1) {
        console.log(k, ele);
        if (ele[1] <= k) {
            k = k - ele[1];
            ele[1] = 0;
        }
        if (ele[1] > k) {
            ele[1] = ele[1] - k;
            k = 0;
        }
        if (k == 0) break;
    }
    console.log(arr1);
    let cnt = 0;
    for (let ele of arr1) {
        if (ele[1] == 0) continue;
        cnt++;
    }
    return cnt;
};

console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2],3));