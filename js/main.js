// age in days project it's my simple culculator age in days create by abdur nur tanim https://facebook.com/abdurnurtanim11

let check = document.getElementById("check");

check.addEventListener("click", function() {

    let resultBox = document.getElementById("resultBox");
    let promptBox = prompt("Enter your brithday year.");
    let ageInDay = (2020 - promptBox);
    let ageInDays = `Your are ${ageInDay} years old.`
        // resultBox.innerHTML = ageInDays;
    if (promptBox === '' || promptBox === null) {
        alert("Please Enter Your Age!")
        resultBox.innerHTML = `${promptBox}it's your not Brith year! \n Enter Your Current Brith year`
    } else {
        resultBox.innerHTML = ageInDays;
    }
});


let reset = document.getElementById("reset");

reset.addEventListener("click", function() {

    let resultBox = document.getElementById("resultBox");
    resultBox.innerHTML = "";

});
