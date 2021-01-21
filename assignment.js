function kilometerToMeter(kilometer) {
    var convertToMeter = (kilometer * 1000);
    if (kilometer <= 0) {
        console.log("Invalid input");
    }

    return convertToMeter;
}


function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity) {
    var watchPrice = 50; // price of watch
    var phonePrice = 100; // price of phone
    var laptopPrice = 500; // price of laptop

    // total cost of watch, phone & laptop
    var totalCost = (watchPrice * watchQuantity + phonePrice * phoneQuantity + laptopPrice * laptopQuantity);

    return totalCost;
}


function hotelCost(day) {
    var firstPart = 100; // cost of 1st 10 days
    var secondPart = 80; // cost of 11th days to 20th days
    var thirdPart = 50; // cost of 20th days to nth days

    if (day <= 0) {
        console.log("Invalid input"); // for negative value
    }
    else if (day <= 10) {
        var cost1 = (day * firstPart); // total cost of 1st 10 days
        return cost1;
    }
    else if (day >= 11 && day <= 20) {
        var cost2 = ((10 * firstPart) + (day - 10) * secondPart); // total cost of 11th days to 20th days
        return cost2;
    }
    else {
        var cost3 = (((10 * firstPart) + ((20 - 10) * secondPart)) + ((day - 20) * thirdPart)); // total cost of 20th days to nth days
        return cost3;
    }
}


var friends = ["Alia", "Dalia", "Malia", "Falaia", "Lafaia"]; // storing the input string into friends variable
function megaFriend(friends) {
    var largestName = friends[0]; // initialize first index as largest name

    for (var i = 0; i < friends.length; i++) {
        var elements = friends[i]; // capture the string elements.......
        // compare elements with the 1st index if they are larger or not.........
        if (elements.length > largestName.length) {
            largestName = elements;
        }
    }
    return largestName;
}