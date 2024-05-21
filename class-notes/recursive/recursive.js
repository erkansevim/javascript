// const add = (n) => {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum = sum + i;
//   }
//   return sum;
// };
// console.log(add(499));

// //-------

const toplamlar = (n) => {
  if (n < 1) {
    return n;
  } else return toplamlar(n - 1) + n;
};

console.log(toplamlar(499));


//---

const fibo=(n)=>{

    if(n<=2){
        return 1
    }
    else return fibo(n-1)+fibo(n-2)
}

console.log(fibo(6));
