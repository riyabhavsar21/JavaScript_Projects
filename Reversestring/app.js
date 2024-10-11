function reverseString(str) {
    var a = str.split("");
    var b = a.reverse();

    return b.join("");
}

reverseString("hello");