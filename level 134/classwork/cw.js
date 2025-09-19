const p1 = new Promise((resolve) => setTimeout(() => resolve("P1 დასრულდა"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("P2 დასრულდა"), 500));
const p3 = new Promise((_, reject) => setTimeout(() => reject("P3 შეცდომა"), 800));
const p4 = new Promise((resolve) => setTimeout(() => resolve("P4 დასრულდა"), 1500));
const p5 = new Promise((_, reject) => setTimeout(() => reject("P5 შეცდომა"), 300));

Promise.all([p1, p2, p4]) 
  .then(results => {
    console.log("ALL:", results); 

  })
  .catch(error => {
    console.log("ALL ERROR:", error); 
  });


Promise.race([p1, p2, p3, p4, p5])
  .then(result => {
    console.log("RACE:", result); 
  })
  .catch(error => {
    console.log("RACE ERROR:", error);
  });

Promise.any([p1, p3, p5])
  .then(result => {
    console.log("ANY:", result); 
  })
  .catch(error => {
    console.log("ANY ERROR:", error.errors); 
  });

Promise.allSettled([p1, p2, p3, p4, p5])
  .then(results => {
    console.log("ALLSETTLED:", results);
  });
