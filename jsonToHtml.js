function jsonToHtml(arr,parentEl){
for(let i=0;i<arr.length;i++){
    let obj=arr[i];
    const ele=document.createElement(obj.type);
    if('props' in obj){
        Object.keys(obj.props).forEach(key=>{
            ele.setAttribute(key,obj.props[key])
        })
    }
    if('textContent' in obj){
        ele.textContent=obj.textContent
    }
    if('children' in obj && Array.isArray(obj[children])){
        jsonToHtml(obj[children],ele)
    }
    parentEl.appendChild(ele)
}
}
