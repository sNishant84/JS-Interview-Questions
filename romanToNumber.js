function convert(s) {
    const romanMap = {
        I: 1, V: 5, X: 10,
        L: 50, C: 100,
        D: 500, M: 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const current = romanMap[s[i]];
        const next = romanMap[s[i + 1]];

        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
}


// integer to roman

function convert(n){
   let num=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
   let symbol=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
let result=''
   for(let i=0;i<13;i++){
    if(n==0) break;
    let times=n/num[i];
    while(times){
    result+=symbol[i];
    times--;
    }
    n=n%num[i]
   }
   return result
}

5 