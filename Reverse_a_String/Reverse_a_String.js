function reverseString(str) {
    //split, reverse, join
    let arr= str.split('');
    let reversedArr= arr.reverse();
    let result = reversedArr.join('');

    return result;
}

reverseString("hello");
