let car = {
    brand: 'Jaguar',
    model: 'F-Type',
    color: 'Black'
};

for (let info in car) {
    console.log(info + ': ' + car[info]); 


    console.log('ეს არის ' + car.brand + ' ბრენდი, კონკრეტულად ' + car.model + ' მოდელი.');
}


