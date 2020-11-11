const M = [3, 5, 6, 1, 2, 9, 4];
console.log("Truoc khi xep:", M);

const InsertionSort = () => {
  let pos = 0;
  for (let i = 0; i < M.length; i++) {
    let x = M[i];
    //M[pos - 1] > x la xep tang dan, M[pos - 1] < x la xep giam dan
    for (pos = i; pos > 0 && M[pos - 1] > x; pos--) {
      M[pos] = M[pos - 1];
    }
    M[pos] = x;
  }

  return M;
};

const result = InsertionSort();
console.log("Sau khi xep:", result);
