// var a = [
//   1,
//   2,
//   4,
//   6,
//   1,
//   100,
//   0,
//   10000,
//   3
// ];

// a.sort(function (a, b) {
//   return a - b;
// });

// console.log('a,', a);

// function binarySearch(arr, i) {
//   var mid = Math.floor(arr.length / 2);
//   console.log(arr[mid], i);

//   if (arr[mid] === i) {
//       console.log('match', arr[mid], i);
//       return arr[mid];
//   } else if (arr[mid] < i && arr.length > 1) {
//       console.log('mid lower', arr[mid], i);
//       binarySearch(arr.splice(mid, Number.MAX_VALUE), i);
//   } else if (arr[mid] > i && arr.length > 1) {
//       console.log('mid higher', arr[mid], i);
//       binarySearch(arr.splice(0, mid), i);
//   } else {
//       console.log('not here', i);
//       return -1;
//   }

// }
// var result = binarySearch(a, 7);
// console.log(result);

const M = [3,5,6,1,2,9,4];
M.sort((a,b) => a-b);

const binarySearch =(arr, x) => {
  const mid = Math.floor(arr.length / 2);
  if(arr[mid] === x) {
return arr[mid];
  } else if(arr[mid] < x && arr.length > 1) {
    //lấy các phần tử từ vị trí mid đến phần tử lớn nhất bên phải
    return binarySearch(arr.splice(mid,Number.MAX_VALUE), x)
  } else if(arr[mid] > x && arr.length >1) {
    //lấy các phần tử từ vị trí đầu tiên bên trái đến vị trí mid
    return binarySearch(arr.splice(0,mid), x)
  } else {
    return -1;
  }
}
const result = binarySearch(M,1);
console.log(result);
