function nb_year(p0, percent, aug, p) {
    let years = 0;
    let population = p0;
  
    while (population < p) {
      population = Math.floor(population + population * (percent / 100) + aug);
      years++;
    }
  
    return years;
  }
  