function factorialize(num) {
    if (num === 0) {
        return 1;
    } else {
        num = num * factorialize(num - 1);
        return num;
    }
}
// 遞迴寫法
factorialize(5);