function groupBy(array, key) {
    return array.reduce((acc, obj) => {
      const groupKey = obj[key];
  
      // create the group if it doesn't exist yet
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
  
      acc[groupKey].push(obj);
      return acc;
    }, {});
  }
  
  const grouped = groupBy(data, 'group');
  console.log(grouped);

  [
    { type: "A", value: 1 },
    { type: "A", value: 2 },
    { type: "B", value: 3 }
  ]

  {
    A: [
      { type: "A", value: 1 },
      { type: "A", value: 2 }
    ],
    B: [
      { type: "B", value: 3 }
    ]
  }


  const arr1 = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  
  const arr2 = [
    { id: 1, age: 25 },
    { id: 2, age: 30 }
  ];
  
  const arr3 = [
    { id: 1, country: 'USA' },
    { id: 2, country: 'Canada' }
  ];
  [
    { id: 1, name: 'Alice', age: 25, country: 'USA' },
    { id: 2, name: 'Bob', age: 30, country: 'Canada' }
  ]

  function mergeByKey(key, ...arrays) {
    const map = new Map();
  
    for (const array of arrays) {
      for (const obj of array) {
        const id = obj[key];
        if (!map.has(id)) map.set(id, {});
        Object.assign(map.get(id), obj);
      }
    }
  
    return Array.from(map.values());
  }

  function mergeByDuplicateKey(arr, key) {
    const map = new Map();
  
    for (const obj of arr) {
      const val = obj[key];
  
      if (!map.has(val)) {
        map.set(val, {});
      }
  
      Object.assign(map.get(val), obj);
    }
  
    return [...map.values()];
  }
  
  const merged = mergeByKey('id', arr1, arr2, arr3);
  console.log(merged);
  
  const result = mergeDuplicatesByKey(arr, 'id');
  console.log(result);
  
  
 
//   const valuesIterator = map.values();
// console.log(valuesIterator); // MapIterator { 1, 2, 3 }
// [...map.values()]; // [1,2,3]
// [...map.keys()] // ['a', 'b', 'c']

// Object.assign lets you copy, merge, or update objects in a simple way, but it’s only shallow, not deep.

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

Object.assign(obj1, obj2);

console.log(obj1); // { a: 1, b: 3, c: 4 }

const original = { a:1, b:2 };
const copy = Object.assign({}, original);
