function selectPayer(names) {
    let totalNames = names.length;
    let randomIndex = new Date().getSeconds() % totalNames;
    return `${names[randomIndex]} უნდა გადაიხადოს ყველას საკვების გადასახადი!`;
}


let namesList = ["ნიკა", "ანა", "გიორგი", "მარი", "დავით"];
console.log(selectPayer(namesList));
