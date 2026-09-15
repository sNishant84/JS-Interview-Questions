function parsePath(path) {
    if (Array.isArray(path)) return path;
  
    const regex = /[^.[\]]+/g;
    return path.match(regex); // this will extract ['a', '0', 'b', 'c'] from 'a[0].b.c'
  }
  
  function set(object, path, value) {
    const keys = parsePath(path);
    const newObject = JSON.parse(JSON.stringify(object)); // deep clone to avoid mutation
    let current = newObject;
  
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
  
      if (i === keys.length - 1) {
        current[key] = value;
      } else {
        if (!(key in current)) {
          // create empty object or array if next key is a number
          current[key] = isNaN(keys[i + 1]) ? {} : [];
        }
        current = current[key];
      }
    }
  
    return newObject;
  }
  
  // Usage:
  const object = { a: [{ b: { c: 3 } }] };
  const result = set(object, 'a[0].b.c', 14);
  console.log(result.a[0].b.c); // 14
  console.log(object.a[0].b.c); // 3 (original untouched)

  

//   Breakdown of the regex /[^.[\]]+/g
// / ... /g — The slashes delimit the regex, and g is the global flag, meaning find all matches (not just the first).

// [^.[\]]+ — This is a character class negation:

// [^...] means match any character NOT inside these brackets.

// Inside [^...], the characters are:

// . — dot

// [ — opening square bracket

// ] — closing square bracket

// So [^.[\]] means match any character except ., [, or ].

// The + means match one or more of these characters.
