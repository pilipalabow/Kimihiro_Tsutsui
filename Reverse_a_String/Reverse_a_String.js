function reverseString(str) {
    // 把str字串split成arr數列
    let arr = str.split('');
    let i = 0;
    // let j = str.length - 1;
    // i跟j存在對應關係，所以可以不用多設j
    // (i + j)/2= 中位數 , i + j = 中位數 * 2 , 0 + length - 1 = 中位數 * 2 
    //  j = length - 1 - i;

    // i<中位數  
    while (i < Math.floor(arr.length / 2)) {
        let j = arr.length - 1 - i;
        // 數列對調的簡便寫法
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
    }
    //把arr數列join成字串 
    return arr.join('');
}

reverseString("hello");

// 第2種作法完成去w3把js的 split floor length join 再看一遍