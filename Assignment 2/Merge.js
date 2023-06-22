const merge = (leftArr, rightArr) => {
    let arr = []

    while(leftArr.length && rightArr.length) {
      if(leftArr[0] < rightArr[0]) {
        console.log(arr)
        arr.push(leftArr.shift())
        
        console.log('1')
      } else {
        console.log(arr)
        arr.push(rightArr.shift())
        
        console.log('2')
      }
    }
    return [...arr, ...leftArr, ...rightArr]
  }