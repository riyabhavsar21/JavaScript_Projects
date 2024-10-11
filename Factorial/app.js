function factorialize(num) {
    var a = 1
    for (var b = 1; b <= num; b++) {
        a = a*b;
    }
    return a;
  }
  
  factorialize(5);

