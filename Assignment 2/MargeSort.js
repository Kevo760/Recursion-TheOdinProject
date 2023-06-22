const mergeSort = (arr) => {
    if(arr.length < 2){
      return arr
    }
    
    const left = arr.splice(0, half)
    return merge(mergeSort(left),mergeSort(arr))
  }