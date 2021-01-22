//===problem 1 : Kilometer To Meter===//

function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {
        var meter = kilometer * 1000;
        return meter;
    }
    else if (typeof kilometer != "number") {
        return 'invalid input';
    }
    else {
        return "distance can never be negative";
    }
}

/* const distance = kilometerToMeter(3);
console.log(distance); */

//===problem 2 : budget calculator===//

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return 'input a valid product value'
    }
    else {

        var watch = watch * 50;

        var phone = phone * 100;

        var laptop = laptop * 500;

        var total = watch + phone + laptop;

        return total;
    }
}


/* var price = budgetCalculator(3, 2, 1);
console.log(price); */

//===problem 3 : hotel Cost ===// 

function hotelCost(days) {
    var cost = 0;
    if (days <= 0 || typeof days != "number") {
        return 'wrong input!';
    }
    else if (days > 0 && days <= 10) {
        cost = days * 100;
    }
    else if (days >= 11 && days <= 20) {
        var firstTenDaysCost = 10 * 100;
        var remaining = days - 10;
        var secondTenDaysCost = remaining * 80;
        cost = firstTenDaysCost + secondTenDaysCost;
    }
    else {
        var firstTenDaysCost = 10 * 100;
        var secondTenDaysCost = 10 * 80;
        var remaining = days - 20;
        var restOfDaysCost = remaining * 50;
        cost = firstTenDaysCost + secondTenDaysCost + restOfDaysCost;

    }
    return cost;
}
/* var total = hotelCost(20);

console.log(total); */

//===problem 4 : mega Friend====//

function megaFriend(nameOfFriends) {

    if (nameOfFriends.length > 0) {
        var bigName = nameOfFriends[0].length;
        for (var i = 0; i < nameOfFriends.length; i++) {
            if (bigName < nameOfFriends[i].length) {
                var megaName = nameOfFriends[i];
            }
        }
    }
    else {
        return 'this array is empty';
    }
    return megaName;
}

/* var nameOfFriends = ['haris', 'tushar', 'shakib', 'mashrafee', 'riad'];
bigFriend = megaFriend(nameOfFriends);
console.log(bigFriend); */