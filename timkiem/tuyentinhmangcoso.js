const M = [1,2,3,4,5,6,7,8,9];

const linearSearch = (x) => {
  for(let i = 0; i <M.length; i++) {
    if(M[i] == x) {
      console.log(`tim thay ${x} tai vi tri ${i}`);
      return i;
    }
  }
  console.log(`k tim thay ${x}`);
  return -1;
};
linearSearch(90);