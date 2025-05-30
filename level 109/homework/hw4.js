const books = {
    "ვეფხისტყაოსანი": "შოთა რუსთაველი",
    "დიდოსტატის მარჯვენა": "კონსტანტინე გამსახურდია",
    "შაშვი შაშვი მაყვალი": "გურამ.doიშვანიშვილი"
  };
  
  let bookTitles = [];
  for (let key in books) {
    bookTitles.push(key);
  }
  console.log(bookTitles);
  