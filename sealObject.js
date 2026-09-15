// Object seal method restrict to add new properties and also you cannot delete the existing properties
const obj = {
    a: 1,
    b: 2,
    c: {
        d: 2
    }
}

function deepSeal(object) {
    let propNames = Object.getOwnPropertyNames(object);
    for (let name of propNames) {
        let value = object[name];
        object[name] = value && typeof value === 'object' ?
            deepSeal(value) : value;
    }
    return Object.seal(object);
}

const sealedObj = deepSeal(obj);

sealedObj.e = 10;
sealedObj.c.e = 20;
delete sealedObj.c.d;
console.log(sealedObj)


// Object.getOwnPropertyNames(obj)

// returns own properties only

// includes non-enumerable

// excludes prototype


const obj = { a: 1, b: 2 };

for (let key in obj) {
  console.log(key);
}
// a
// b

Object.keys(obj);
// ["a", "b"]

const obj = {};

Object.defineProperty(obj, 'secret', {
  value: 42,
  enumerable: false
});

for (let key in obj) {
  console.log(key);
}
// (nothing)

Object.keys(obj);
// []

const obj = {};
Object.defineProperty(obj, 'hidden', {
  value: 42,
  enumerable: false
});
obj.visible = 1;

Object.keys(obj);
// ["visible"]

Object.getOwnPropertyNames(obj);
// ["hidden", "visible"]


const parent = { x: 1 };
const child = Object.create(parent);
child.y = 2;

Object.getOwnPropertyNames(child);
// ["y"]
Even though child.x works:

child.x; // 1

enumerable: true → shows up when you loop

enumerable: false → hidden from normal loops
