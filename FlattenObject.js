function flattenObj(obj, parent = '', res = {}) {
    for (let key in obj) {
        let propName = parent ? parent + '_' + key : key;
        
        // Check if the property is an array
        if (Array.isArray(obj[key])) {
            obj[key].forEach((item, index) => {
                // Flatten array elements, adding the index to the key
                flattenObj({ [index]: item }, propName, res);
            });
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            // If it's a non-null object, recurse
            flattenObj(obj[key], propName, res);
        } else {
            // Otherwise, it's a primitive value, add to result
            res[propName] = obj[key];
        }
    }
    return res;
}


function flattenObj(obj,parent,res={}){
    Object.keys(obj).forEach(key=>{
        let property='';
        if(parent==''){
             property=key;
        }else{
             property=`${parent}.${key}`;
        }
        if(obj[key]==='object'){
            res=flattenObj(obj[key],property,res)
        }else{
            res[property]=obj[key];
        }
    })
    return res
}
