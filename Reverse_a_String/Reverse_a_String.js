function reverseString(str) {
    let res = "";
    for (let i = str.length - 1; i >= 0; i--) {
        res = res + str[i];
    }
    return res;
}

reverseString("hello");