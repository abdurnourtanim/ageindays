// age in days project

let check = document.getElementById("check");

    check.addEventListener("click", function (){

        let resultBox = document.getElementById("resultBox");
        let promptBox = prompt("Enter your brithday year.");
        let ageInDay = (2020 - promptBox) * 365;
        let ageInDays = "Your are " + ageInDay + " days old.";
        resultBox.innerHTML = ageInDays;

    });
	

let reset = document.getElementById("reset");

    reset.addEventListener("click", function (){

        let resultBox = document.getElementById("resultBox");
        resultBox.innerHTML = "";

    });

// ORDER COMPLETED
