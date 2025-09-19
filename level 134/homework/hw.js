// 1
const a1 = Promise.resolve("First");
const a2 = Promise.resolve("Second");
const a3 = Promise.resolve("Third");

Promise.all([a1, a2, a3])
  .then(values => console.log("1. All success:", values));

// 2
const b1 = Promise.resolve("Ok1");
const b2 = Promise.reject("Error in b2");
const b3 = Promise.resolve("Ok3");

Promise.all([b1, b2, b3])
  .then(values => console.log("2. Values:", values))
  .catch(err => console.error("2. One failed:", err));

// 3
const c1 = new Promise(resolve => setTimeout(() => resolve("c1 done in 1s"), 1000));
const c2 = new Promise(resolve => setTimeout(() => resolve("c2 done in 0.5s"), 500));
const c3 = new Promise(resolve => setTimeout(() => resolve("c3 done in 2s"), 2000));

Promise.race([c1, c2, c3])
  .then(winner => console.log("3. Race fastest:", winner));

// 4
const d1 = Promise.reject("Immediate failure");
const d2 = new Promise(resolve => setTimeout(() => resolve("d2 after 1s"), 1000));
const d3 = new Promise(resolve => setTimeout(() => resolve("d3 after 2s"), 2000));

Promise.race([d1, d2, d3])
  .then(res => console.log("4. Race result:", res))
  .catch(err => console.error("4. Race rejected:", err));

// 5
const e1 = Promise.reject("Fail e1");
const e2 = Promise.resolve("Success e2");
const e3 = Promise.reject("Fail e3");

Promise.any([e1, e2, e3])
  .then(firstSuccess => console.log("5. First success (any):", firstSuccess))
  .catch(err => console.error("5. Any error:", err));

// 6
const f1 = Promise.reject("Fail f1");
const f2 = Promise.reject("Fail f2");

Promise.any([f1, f2])
  .then(res => console.log("6. Any success:", res))
  .catch(err => {
    console.error("6. Any all fail AggregateError message:", err.errors);
  });

// 7
const g1 = Promise.resolve("Good1");
const g2 = Promise.reject("Bad2");
const g3 = Promise.resolve("Good3");
const g4 = Promise.reject("Bad4");
const g5 = Promise.resolve("Good5");

Promise.allSettled([g1, g2, g3, g4, g5])
  .then(results => {
    console.log("7. AllSettled Summary:");
    results.forEach((r, i) => console.log(`   #${i+1}:`, r));
  });

// 8
Promise.allSettled([g1, g2, g3, g4, g5])
  .then(results => {
    const fulfilled = results.filter(r => r.status === "fulfilled");
    console.log("8. Fulfilled only:", fulfilled.map(r => r.value));
  });

// 9
Promise.allSettled([g1, g2, g3, g4, g5])
  .then(results => {
    const failures = results.filter(r => r.status === "rejected").length;
    console.log("9. Number of failures:", failures);
  });

// 10
const nums = [
  Promise.resolve(2),
  Promise.resolve(4),
  Promise.resolve(6)
];
Promise.all(nums)
  .then(values => {
    const doubled = values.map(n => n * 2);
    console.log("10. Doubled numbers:", doubled);
  });

console.log("All Level 134 Promises started — wait for outputs...");
