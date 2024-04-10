function merge(arr) {
  let len = arr.length;
  if (len <= 1) return arr;

  let mid = Math.floor(len / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  left = merge(left);
  right = merge(right);

  return mergeSortedArrays(left, right);
}

function mergeSortedArrays(left, right) {
  let l = 0;
  let r = 0;
  let sortedArr = [];

  while (l < left.length && r < right.length) {
      if (left[l] < right[r]) {
          sortedArr.push(left[l]);
          l++;
      } else {
          sortedArr.push(right[r]);
          r++;
      }
  }

  sortedArr = sortedArr.concat(left.slice(l)).concat(right.slice(r));
  return sortedArr;
}

console.log(merge([12, 12, 23, 4 , 6, 6, 10, -35, 28]));
console.log(merge([12, 3, 4, 2, 5, 1, 10, 7]));