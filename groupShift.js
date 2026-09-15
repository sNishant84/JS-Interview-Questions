function wordShift(arr){
    let map=new Map();
    for(let i=0;i<arr.length;i++){
      let key=getKey(arr[i]);
      if(!map.has(key)){
        map.set(key,[])
      }
      map.get(key).push(arr[i])
    }
    
    console.log(map.values())
  }
  
  function getKey(s){
    if(s[0]=='a'){
      return s
    }
    
    let cArr=s.split('');
    let shift=s.charCodeAt(0)-'a'.charCodeAt(0)
    cArr[0]='a';
    for(let i=1;i<s.length;i++){
      let diff=s.charCodeAt(i)-shift;
      console.log(diff)
      if(diff<97){
        cArr[i]=String.fromCharCode(diff+26)
      }else{
        cArr[i]=String.fromCharCode(diff)
      }
    }
    return cArr.join('');
  }
  
  wordShift(['abc','bcd','acef','xyz','az','ba','a','z'])

//   in this problem we have to find what needs to make abc to bcd we need to add 1 to abc or subtract 1 from bcd to abc so for this 
//   we will make all the key to a find the shift how many we need if goes less than 97 we add 26 to it