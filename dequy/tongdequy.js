const a = [1,2,3,4,5,6,7,8]
const n = a.length;

const sumA = (arr, x) => {
  if(x == 0) {
    return 0
  } else if(x == 1) {
    return arr[0]
  } else {
return sumA(arr, x -1) + arr[x-1]
  }
}
const result = sumA(a,n)
console.log(result)