//sap xep tang dan j-1 la phan tu dung truoc, j la phan tu dung sau, phan tu sau phai lon hon phan tu truoc
//neu j < j-1 thi thuc hien sap xep tang dan vi phan tu dung sau phai lon hon phan tu dung truoc
const M = [3, 5, 6, 1, 2, 9, 4];
console.log("Truoc khi xep:", M);
const BubbleSort = () => {
  const length = M.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = length - 1; j > i; j--) {
        //thay j > j-1 la sap xep giam dan
      if (M[j] < M[j - 1]) {
        let temp = M[j];
        M[j] = M[j - 1];
        M[j - 1] = temp;
      }
    }
  }
  return M;
};

const result = BubbleSort();
console.log("Sau khi xep:", result);
