function addBinary(a,b){
    let i=a.length-1;
    let j=b.length-1;
    let result=[];
    let carry=0;
    while(i>=0 || j>=0 || carry){
        let bita= i>0  ? parseInt(a[i]) : 0
        let bitb= j>0  ? parseInt(b[j]) : 0
        let sum=bita+bitb+carry;
        result.push(sum%2);
        carry=carry/2;
        i--;
        j--;
    }
    return result.reverse().join('')
}
