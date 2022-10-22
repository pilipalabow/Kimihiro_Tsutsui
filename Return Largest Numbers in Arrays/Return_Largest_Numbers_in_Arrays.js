function largestOfFour(arr) {
    let ans = [];
    // 設最後答案的數組，預設為一個空arr
    for (let i = 0; i < arr.length; i++) {
        let max = -Infinity;
        // 設最大值的預設為最小值
        for (let j = 0;j<arr[i].length;j++){
            max=Math.max(max,arr[i][j]);
            // 最大值為群組內最大
        }
        ans.push(max);
        // 把最大值加入第i個數組後，到下一個i數組
    }
    return ans;
    // 最後傳回答案
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// 去W3s了解Math.max  Infinity  的內容