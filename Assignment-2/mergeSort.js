function merge(arr) {
    let len = arr.length
    if (len === 1) return arr;
    
    let left = merge(arr.splice(0,Math.floor(len/2)))
    let right = merge(arr.splice(Math.floor(0,len/2)))
    
    return(sort(left, right))
  }
  
  function sort(left, right) {
    let l = 0;
    let r = 0;
    let sortedArr = [];
    for(let i=0; i<left.length+right.length; i++) {
      if(l===left.length) {
      right.splice(r).map(i=>sortedArr.push(i))
        break;
      }
      if(r===right.length) {
        left.splice(l).map(i=>sortedArr.push(i))
        break;
      }
      if(left[l]<right[r]) {
        sortedArr.push(left[l])
        l++
      } else {
        sortedArr.push(right[r])
        r++
      }
    }
    return sortedArr
  }
  console.log(merge([12, 12, 23, 4 , 6, 6, 10, -35, 28]))
  console.log(merge([12,3,4,2,5,1,10,7]))