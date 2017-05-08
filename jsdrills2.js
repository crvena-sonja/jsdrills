function jediName(firstName, lastName){
    return `${lastName.slice(0, 3) + firstName.slice(0, 2)}`
}

// console.log(jediName('Beyonce', 'Knowles'));


function beyond(num){
    function posOrNeg(num){
        if (Math.sign(num) === 1){
            console.log('To infinity');
        } else {
            console.log('To negative infinity');
        }
    }
    switch(num) {
        case Infinity:
        case -Infinity : console.log('And beyond'); break;
        case 0 : console.log('Staying Home'); break;
        default : posOrNeg(num); break;
    }
}

beyond(Infinity);