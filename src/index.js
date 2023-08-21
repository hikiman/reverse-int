module.exports = function reverse (n) {
    let result = '';
    let str_n = String(n);
    if (str_n[0] == '-') {
        n = Number(str_n.substring(1));
    }
    while (Math.abs(n > 0.99)) {
        result += Math.floor(n % 10);
        n /= 10;
    }
    return Number(result);
}
