function reverseString(str) {
    // 把str字串split成arr數列
    let arr = str.split('');
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    //把arr數列join成字串 
    return arr.join('');
}

reverseString("hello");