function factorialize(num) {
    let a = 1
    for (let b = 1; b <= num; b++) {
      a *= b
    }
    return a;
  }
  
  factorialize(5);

