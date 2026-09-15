//Hashset add delete and has O(1). set is basically a has set . we have have buckets means array of buckets. and suppose we want to store key
// key%bucket because if key is greater we need to accomodate in those bucket. time complexity is n keys k is size of buckets
// n/k which is approximately equal to 0(1) if we use splice it will be still ok indexOF find element
// indexOf(key) → looks through the bucket one by one

// Worst case: bucket has n elements → O(n)

// Average case: bucket has n/k elements → O(n/k) ≈ O(1) if k is big enough

// splice(pos, 1) → removes the key

// Need to shift the rest of the array after deletion

// Worst case: bucket size = n → O(n)

// Average case: bucket size = n/k → O(1) if k is big

// we generally take bucket size prime number because if we take normal number then their factors goes into one bucket that's why

// Set → [[1, 2]]


class Hashset{
    constructor(size=1000){
        this.bucket=Array.from({length:size},()=>[])
    }
    
    hash(key){
        return key%this.bucket.length;
    }
    add(val){
        const idx=this.hash(val);
        if(!this.bucket[idx].includes(val)){
            this.bucket[idx].push(val)
        }
    }
    
    has(val){
        const idx=this.hash(val)
        return this.bucket[idx].includes(val)
    }
    
    remove(val){
        const idx=this.hash(val);
        const index=this.bucket[idx].indexOf(val);
        if(index!=-1){
            this.bucket[idx].splice(index,1)
        }
    }
    
    }
    
    const set=new Hashset();
    set.add(1);
    console.log(set)
    console.log(set.has(1))
    set.remove(1);
    console.log(set)