// ------------------------------
// Test Runner State
// ------------------------------
let beforeEachFn = null;

// ------------------------------
// describe()
// ------------------------------
function describe(title, fn) {
  console.log(`\n📦 ${title}`);
  fn();
}

// ------------------------------
// beforeEach()
// ------------------------------
function beforeEach(fn) {
  beforeEachFn = fn;
}

// ------------------------------
// test()
// ------------------------------
async function test(title, fn) {
  try {
    if (beforeEachFn) {
      await beforeEachFn();
    }
    await fn();
    console.log(`  ✅ ${title}`);
  } catch (error) {
    console.log(`  ❌ ${title}`);
    console.error(`     ${error.message}`);
  }
}

// ------------------------------
// expect()
// ------------------------------
function expect(received) {
  return {
    toBe(expected) {
      if (received !== expected) {
        throw new Error(`Expected ${expected}, but got ${received}`);
      }
    },

    toEqual(expected) {
      const r = JSON.stringify(received);
      const e = JSON.stringify(expected);
      if (r !== e) {
        throw new Error(`Expected ${e}, but got ${r}`);
      }
    },

    toBeTruthy() {
      if (!received) {
        throw new Error(`Expected truthy value, got ${received}`);
      }
    }
  };
}

// ------------------------------
// Example Tests
// ------------------------------
describe("Math tests", () => {

  beforeEach(() => {
    // runs before each test
  });

  test("addition works", () => {
    expect(2 + 3).toBe(5);
  });

  test("async test works", async () => {
    const value = await Promise.resolve(10);
    expect(value).toBe(10);
  });

  test("object comparison", () => {
    expect({ a: 1 }).toEqual({ a: 1 });
  });

});
