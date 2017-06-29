function add(x, y) {
    var result = x + y;
    return result;
};

function highestNumber(x,y) {
    var result = x;
    if (x < y) {
        result = y;
    }
    return result;
}

function lowestNumber(x,y) {
    var result = x;
    if (x > y) {
        result = y;
    }
    return result;
}