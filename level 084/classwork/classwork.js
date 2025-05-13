function checkInfo(name, lastname, age, birthyear) {

    let name = 'ნიკა'
    let lastname = 'ჭყოიძე'
    let age = 14
    let birthyear = 2010
    
    if (name === 'ნიკა') {
        return 'სახელი დაემთხვა';
    } else {
        return 'სახელი არ დაემთხვა';
    }

    if (lastname === 'ჭყოიძე') {
        return 'გვარი დაემთხვა';
    } else {
        return 'გვარი არ დაემთხვა';
    }

    if (age === 14){
        return 'ასაკი დაემთხვა'
    } else {
        return 'ასაკი არ დაემთხვა'
    }

    if (birthyear === 2010) {
        return 'ასაკი დაემთხვა'
    } else {
        return 'ასაკი არ დაემთხვა'
    }
        

}

