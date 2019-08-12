function getReceipt() {
    var text1 = "<h3> You ordered: </h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");

    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }

    if (selectedSize === "Personal") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium") {
        sizeTotal = 10;
    } else if (selectedSize === "Large") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large") {
        sizeTotal = 16;
    }

    runningTotal = sizeTotal;

    getMeat(runningTotal, text1);
}

function getMeat(runningTotal, text1) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meat");


    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            console.log("selected meat item: (" + meatArray[j].value + ")");
            text1 = text1 + meatArray[j].value + "<br>";
        }
    }

    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }

    runningTotal = (runningTotal + meatTotal);

    

    getCheese(runningTotal, text1);
}

function getCheese(runningTotal, text1) {
    var cheeseTotal = 0;
    var cheeseArray = document.getElementsByClassName("cheese");
    for (var k = 0; k < cheeseArray.length; k++) {
        if (cheeseArray[k].checked) {
            var selectedCheese = cheeseArray[k].value;
            text1 = text1+selectedCheese+"<br>";
        }
    }

    if (selectedCheese === "Extra Cheese") {
        cheeseTotal = 3;
    } else {
        cheeseTotal = 0;
    }

    runningTotal = (runningTotal + cheeseTotal);

    getCrust(runningTotal, text1);
}

function getCrust(runningTotal, text1) {
    var crustTotal = 0;
    var crustArray = document.getElementsByClassName("crust");
    for (var m = 0; m < crustArray.length; m++) {
        if (crustArray[m].checked) {
            var selectedCrust = crustArray[m].value;
            text1 = text1+selectedCrust+"<br>";
        }
    }

    if (selectedCrust === "Cheese Stuffed Crust") {
        crustTotal = 3;
    } else {
        crustTotal = 0;
    }
    
    runningTotal = (runningTotal + crustTotal);
    
    getSauce(runningTotal, text1)
}

function getSauce(runningTotal, text1) {
    var sauceArray= document.getElementsByClassName("sauce");
    for (var n = 0; n <sauceArray.length; n++) {
        if (sauceArray[n].checked) {
            var selectedSauce = sauceArray[n].value;
            text1 = text1+selectedSauce+"<br>";
        }
    }

    getVeg(runningTotal, text1);
}

function getVeg(runningTotal, text1) {
    var vegTotal = 0;
    var selectedVeg = []
    var vegArray = document.getElementsByClassName("veg");
    for (var p= 0 ; p < vegArray.length; p++) {
        if (vegArray[p].checked) {
            selectedVeg.push(vegArray[p].value);
            text1 = text1+vegArray[p].value+"<br>"
        }
    }

    var vegCount= selectedVeg.length;
    if (vegCount > 1) {
        vegTotal = (vegCount - 1);
    } else {
        vegTotal = 0;
    }

    runningTotal = (runningTotal + vegTotal)


document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "Total: $" + runningTotal;

}