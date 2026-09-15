// enable myCookie
function useCustomCookie() {
  
    // to store the key and value
    // of each cookie
    const store = new Map();
  
    Object.defineProperty(document, 'myCookie', {
      configurable: true,
      get() {
        
        const cookies = []; 
        const time = Date.now();
        
        // get all the entries from the store
        for(const [name, { value, expires }] of store) {
          // if the entry is expired
          // remove it from the store
          if (expires <= time) {
            store.delete(name);
          } 
          // else push the key-value pair in the cookies array
          else {
            cookies.push(`${name}=${value}`);
          }
        }
        
        // return all the key-value pairs as a string
        return cookies.join('; ');
      },
  
      set(val) {
        // get the key value of the data
        // and option from the string
        const { key, value, options } = parseCookieString(val);
        
        // if option has max-age
        // set the expiry date
        let expires = Infinity;
        if(options["max-age"]) {
          expires = Date.now() + Number(options["max-age"]) * 1000;
        }
        
        // add the entry in the store
        store.set(key, { value, expires });
      }
    })
  }

  // helper function to parse the
// key-value pairs
function parseCookieString(str) {
    // split the string on ;
    // separate the data and the options
    const [nameValue, ...rest] = str.split(';');
    
    // get the key value separated from the data
    const [key, value] = separateKeyValue(nameValue);
    
    // parse all the options and store it
    // like max-age
    const options = {};
    for(const option of rest) {
      const [key, value] = separateKeyValue(option);
      options[key] = value;
    }
    
    return {
      key,
      value,
      options,
    }
  }
  
  // helper function
  // to separate key and value
  function separateKeyValue(str) {
    return str.split('=').map(s => s.trim());
  }

  Input:
useCustomCookie();
document.myCookie = "blog=learnersbucket";

// this will expire after 1 second
document.myCookie = "name=prashant;max-age=1"; 

console.log(document.myCookie);

setTimeout(() => {
  console.log(document.myCookie);
}, 1500);

Output:
"blog=learnersbucket; name=prashant"
"blog=learnersbucket"



// h, yes! Object.defineProperty is a powerful JavaScript method that lets you define or modify properties on objects with fine-grained control over their behavior

Object.defineProperty(obj, propName, descriptor);
// obj → the object you want to add/modify a property on

// propName → the name of the property

// descriptor → an object that defines how the property behaves

Object.defineProperty(obj, 'name', {
  value: 'John',
  writable: true,     // can we change it?
  enumerable: true,   // shows up in loops like for...in
  configurable: true  // can we delete or redefine it?
});

Object.defineProperty(obj, 'fullName', {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(value) {
    [this.firstName, this.lastName] = value.split(' ');
  },
  enumerable: true,
  configurable: true
});

// writable: false → cannot be changed

// enumerable: false → won’t show in for...in or Object.keys()

// configurable: false → cannot delete or redefine

