const sample_features={
    show_dialog_box:true,
    enable_new_price:true
}

const Cache={
    featureFlags:{},
    timeStamp:null
}

const maxcachettl=1000;
function fetchAllFeatures(){
return new Promise((resolve)=>{
    setTimeout(()=>resolve(sample_features),100)
});
}

// we have to also minimise the call so we have async functions which will make the call simultaneously to the backend so what we can do if 
// if the promise in the pending state we can queue the callbacks in then block of promise . basically queue the call rather than creating a new promise.

let fetchInstance=null
function getFeatureState(featureName,defaultValue){
    const isCacheDataPresent=Object.keys(Cache.featureFlags).length;
    const isCacheDataFresh=Date.now() - Cache.timeStamp<maxcachettl
    if(isCacheDataFresh && isCacheDataPresent){
        return Promise.resolve(Cache.featureFlags[featureName] ?? defaultValue);
    }
    if(fetchInstance instanceof Promise){
        return fetchInstance
        .then((featureFlags)=>{
            return featureFlags[featureName] ?? defaultValue
        }).catch(()=>defaultValue)
    }

    fetchInstance= fetchAllFeatures()
    .then((featureFlags)=>{
        Cache.featureFlags=featureFlags;
        Cache.timeStamp=Date.now();
        return featureFlags[featureName] ?? defaultValue;
    })
    .catch(()=>defaultValue);
 return fetchInstance
}

getFeatureState('show_dialog_box',false).then(isEnabled=>{
    console.log("value",isEnabled)
})
getFeatureState('show_dialog_box',false).then(isEnabled=>{
    console.log("value",isEnabled)
})


// fetchInstance stores the promise of the ongoing fetch.

// If a fetch is already in progress, we don’t start a new one.

// Instead, we queue the callback on the existing promise with .then(...).

// This is called request coalescing — multiple calls share the same pending promise.


// A promise represents a value that may not exist yet (it’s “pending”).

// You can attach any number of .then() handlers to the same promise — they all get called when the promise resolves.

// You do not create a new network call; the promise just notifies all .then() callbacks when it finishes.
