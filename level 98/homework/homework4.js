function battle(x, y) {
    function getPower(str) {
        var sum = 0;
        for (var i = 0; i < str.length; i++) {
            sum += str.charCodeAt(i) - 64; 
        }
        return sum;
    }

    var powerX = getPower(x);
    var powerY = getPower(y);

    if (powerX > powerY) {
        return x;
    } else if (powerY > powerX) {
        return y;
    } else {
        return "Tie!";
    }
}