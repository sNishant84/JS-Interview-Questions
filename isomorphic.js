we have to take two map and i have to check both map for the mapping.

function isomorphic(s,t){
    let mapstot={};
    let maptos={};
    for(let i=0;i<s.length;i++){
        if(!mapstot[s[i]] && !maptos[t[i]]){
            mapstot[s[i]]=t[i];
            maptos[t[i]]=s[i];
        }else if(maptos[t[i]]!==s[i]){
            return false;

        }else if(mapsot[s[i]]!=t[i]){
            return false;
        }
    }
    return true
}