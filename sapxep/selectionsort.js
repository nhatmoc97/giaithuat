const M = [3, 5, 6, 1, 2, 9, 4];
console.log("Truoc khi xep:", M);

const SelectionSort = () => {
  const length = M.length;
  //lặp i chạy từ 0 đến phần tử cuối
  for (let i = 0; i < length - 1; i++) {
      //gán phần tử nhỏ nhất bằng i
    let min = i;
    //lặp j chạy từ phần tử tiếp theo sau i tăng dần
    for (let j = i + 1; j < length; j++) {
        //nếu j < phần tử nhỏ nhất thì đổi chỗ j thành phần tử nhỏ nhất
      if (M[j] < M[min]) {
        min = j;
      }
    }
    //nếu min khác i thì đổi chỗ min với i
    if (min !== i) {
      let temp = M[i];
      M[i] = M[min];
      M[min] = temp;
    }
  }
  return M;
};

const result = SelectionSort();
console.log("Sau khi xep:", result);
