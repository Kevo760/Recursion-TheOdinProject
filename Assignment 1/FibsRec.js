const fibsRec = (num) => {
    if(num < 2) {
      return num;
    } else {
      return fibsRec(num-1) + fibsRec(num - 2);
    }
  }
