// count occurenece of anagram . so supoose there is a string we have find other string in
// that string. so basically in big string we have to find pattern

function countOccurence(str1,str2){
    let i=0;
    let j=0;
    let count=0;
    let res='';
    let k=str2.length;
    while(j<str1.length){
       res=res+str1[j];
       if(j-i+1<k){
        j++
       }else if(j-i+1==k){
           console.log(res)
        if(res.split('').sort().join('')==str2.split('').sort().join('')){
            count++;
        }
        i++;
        j++
        res=res.slice(1)
       }
    }
   console.log(count)
}

countOccurence('forxxorfxdofr','for')


function countOccurence(str1, str2) {
    let mp = new Map();
    for (let ch of str2) {
        mp.set(ch, (mp.get(ch) || 0) + 1);
    }

    let i = 0, j = 0;
    let k = str2.length;
    let count = mp.size;
    let ans = 0;

    while (j < str1.length) {

        // include character
        if (mp.has(str1[j])) {
            mp.set(str1[j], mp.get(str1[j]) - 1);
            if (mp.get(str1[j]) === 0) {
                count--;
            }
        }

        // window not ready
        if (j - i + 1 < k) {
            j++;
        }

        // window size == k
        else if (j - i + 1 === k) {

            if (count === 0) {
                ans++;
            }

            // remove character
            if (mp.has(str1[i])) {
                if (mp.get(str1[i]) === 0) {
                    count++;
                }
                mp.set(str1[i], mp.get(str1[i]) + 1);
            }

            i++;
            j++;
        }
    }

    console.log(ans);
}

