function modifyObjectsArray() {
    let people = [{ name: "Alice" }, { name: "Bob" }];
    let places = [{ city: "Paris" }, { city: "London" }];

    let Array = [...people, ...places];

    Array.copyWithin(2, 0, 2);

    Array.fill({ city: "New York" }, Array.length - 2, Array.length);

    Array.pop();

    Array.shift();

    Array.unshift({ name: "Charlie" }, { name: "David" });

    return Array;
}

console.log(modifyObjectsArray());
