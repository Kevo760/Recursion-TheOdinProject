const fibs = (sequenceNumber) => {
    let arr = [0,1]
    if(typeof sequenceNumber !== 'number') {
      console.log('Please put a number value')
    } else if(sequenceNumber < 0) {
      console.log('Please enter a positive value')
    } else {
      for(let i = 0; i < sequenceNumber; i++) {
        const total = arr[i] + arr[i + 1]
        arr.push(total)
       }
       console.log(arr)
    }
  }