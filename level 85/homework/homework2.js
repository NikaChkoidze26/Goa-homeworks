function updateLight(current) {
    switch (current) {
        case 'green':
            return 'yellow';
        case 'yellow':
            return 'red';
        case 'red':
            return 'green';
        default:
            throw new Error('Invalid traffic light color');
    }
}

