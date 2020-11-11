const M = [3, 5, 6, 1, 2, 9, 4];
console.log("Truoc khi xep:", M);

const InterChangeSort = () => {
    for(let i = 0; i < M.length -1; i++) {
        for(let j = i+1; j < M.length; j++) {
            if(M[j] < M[i]) {
                let temp = M[i];
                M[i] = M[j];
                M[j] = temp
            }
        }
    }
    return M;
}

const result = InterChangeSort();
console.log("Sau khi xep:", result);