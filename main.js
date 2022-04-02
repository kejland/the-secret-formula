let textInput = document.querySelector("#inputText");

let alertform = document.querySelector("#alerter");

alertform.addEventListener("submit", function(){

    if (textInput.value === ""){
        alert("Please input text");
    } else {
        alert(textInput.value);
    }

})

//========================================================================

//Bread radio button selection:
let whiteBread = document.querySelector("#whitebread");
let wheatBread = document.querySelector("#wholewheat");
let bagelBread = document.querySelector("#bagel");

//Meat selection:
let ham = document.querySelector("#ham");
let sausage = document.querySelector("#sausage");
let backgroundColor = document.querySelector("#bacon");

//Veggie selection:
let spinach = document.querySelector("#spinach");
let peppers = document.querySelector("#peppers");
let lettuce = document.querySelector("#lettuce");
let mushrooms = document.querySelector("#mushrooms");
let cucumber = document.querySelector("#cucumber");

//Sauce selection:
let pesto = document.querySelector("#pesto");
let mustard = document.querySelector("#mustard");
let ketchup = document.querySelector("#ketchup");
let mayo = document.querySelector("#mayo");

//Sandwhich form:
let sandwhichForm = document.querySelector("#sandwhichBuilder")


sandwhichForm.addEventListener("submit", function(){

    if (whiteBread.checked === true){
        breadChoice = "White Bread, ";
    } else if (wheatBread.checked === true){
        breadChoice = "Whole Wheat Bread, ";
    } else if (bagelBread.checked === true){
        breadChoice = "Bagel, "
    }

    let meatChoice = "";

    if (ham.checked === true){
        meatChoice += "Ham, ";
    } else if (sausage.checked === true){
        meatChoice += "Sausage, ";
    } else if (bacon.checked === true){
        meatChoice += "Bacon, ";
    }

    let veggieChoice = "";

    if (spinach.checked === true){
        veggieChoice += "Spinach, ";
    } else if (peppers.checked === true){
        veggieChoice += "Peppers, ";
    } else if (lettuce.checked === true){
        veggieChoice += "Lettuce, ";
    } else if (mushrooms.checked === true){
        veggieChoice += "Mushrooms, ";
    } else if (cucumber.checked === true){
        veggieChoice += "Cucumbers, ";
    }

    let sauceChoice = "";

    if (pesto.checked === true){
        sauceChoice += "Pesto, ";
    } else if (mustard.checked === true){
        sauceChoice += "Mustard, ";
    } else if (ketchup.checked === true){
        sauceChoice += "Ketchup, ";
    } else if (mayo.checked === true){
        sauceChoice += "Mayo, ";
    }

    let sandwhich = "Your sandwhich contains: " + breadChoice + meatChoice + veggieChoice + sauceChoice;

    //let final = sandwhich.replace(/, $/) + ".";
    let final = sandwhich.slice(0, sandwhich.length-2);

    alert(final);

})


//========================================================================

//appointment date:
let date = document.querySelector("#date-input");

//hairdresser:
let hairdresser = document.querySelector("#hairdresser");

//short hair or long hair radio buttons:
let shortHair = document.querySelector("#short-hair");
let longHair = document.querySelector("#long-hair");

//hair appointment form:
let appointment = document.querySelector("#haircut");

appointment.addEventListener("submit", function(event){

    let hairLength = ""

    if (shortHair.checked === true){
        hairLength += "short hair.";
    } else if (longHair.checked === true){
        hairLength += "long hair.";
    }

    // if (date.value === ""){
    //     let dateInput = false;
    // }

    // if (hairdresser.value === ""){
    //     let stylist = false;
    // }

    // if (shortHair.checked !== true && longHair.checked !== true){
    //     let hairRadio = false;
    // }

    if (date.value === ""){
        event.preventDefault();
        alert("Please select a date");
    } else if (hairdresser.value === ""){
        event.preventDefault();
        alert("Please input the name of you hairdresser");
    } else if (shortHair.checked !== true && longHair.checked !== true){
        event.preventDefault();
        alert("Please select your hair length");
    } else {
        alert("Your haircut is scheduled for " + date.value + " with " + hairdresser.value + " for " + hairLength);
    }
    
})


//========================================================================

//input types:
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let passwordConfirm = document.querySelector("#confirm");

//create account form:
let createAccount = document.querySelector("#create-account");

createAccount.addEventListener("submit", function(event){
    if (username.value === ""){
        event.preventDefault();
        alert("Please input a username");
    } else if (email.value === ""){
        event.preventDefault();
        alert("Please input email address");
    } else if (password.value === ""){
        event.preventDefault();
        alert("Please input a password");
    } else if (passwordConfirm.value === ""){
        event.preventDefault();
        alert("Please confirm your password");
    } else if (password.value !== passwordConfirm.value){
        event.preventDefault();
        alert("Password does not match. \nPlease confirm again");
    } else {
        alert("You have successfully created an account!\nYour user name is: " + username.value +"\nAnd your email is: " + email.value);
    }
})