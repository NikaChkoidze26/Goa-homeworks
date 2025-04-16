function whoPays(names) {
    const randomIndex = Math.floor(Math.random() * names.length);
    return `${names[randomIndex]} will pay!`;
}

console.log(whoPays(["Giorgi", "Nino", "Ana", "Luka"]));
