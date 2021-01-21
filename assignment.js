function kilometerToMeter(kilometer) {
    var convertToMeter = (kilometer * firstPart0);

    return convertToMeter;
}
// console.log(kilometerToMeter(10));

function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity) {
    var watchPrice = 50;
    var phonePrice = firstPart;
    var laptopPrice = 500;

    // total cost of watch, phone & laptop
    var totalCost = (watchPrice * watchQuantity + phonePrice * phoneQuantity + laptopPrice * laptopQuantity);

    return totalCost;
}
// console.log(budgetCalculator(2,1,9));

function hotelCost(day) {
    var firstPart = 100;
    var secondPart = 80;
    var thirdPart = 50;
    if (day <= 10) {
        var cost1 = (day * firstPart);
        return cost1;
    }
    else if (day >= 11 && day <= 20) {
        var cost2 = ((10 * firstPart) + (day - 10) * secondPart);
        return cost2;
    }
    else {
        var cost3 = (((10 * firstPart) + ((20 - 10) * secondPart)) + ((day - 20) * thirdPart));
        return cost3;
    }
}
// console.log(hotelCost(20));

var friends = ["Akib", "Mahinmahfiz", "Abir", "Faysal"];
function megaFriend(friends) {
    var largestName = friends[0];

    for (var i = 0; i < friends.length; i++) {
        var elements = friends[i];
        if (elements.length > largestName.length) {
            largestName = elements;
        }
    }
    return largestName;
}
console.log(megaFriend);
