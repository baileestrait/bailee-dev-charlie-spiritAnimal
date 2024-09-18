// $('body').css("background-color", "yellow");

// when button is clicked:
//IIFE: immediately invokes function expression 
$("#btnGetAnimal").on("click", function(){
// get user name
let bakerName = $("#bakerName").val();
//   var variableName = .... let (constant)
let spiritAnimals = ["🦅","🐎","🐄","🦎","🦉","🐈","🐕","🐟","🦈","🦦"]
let randomAnimal = spiritAnimals[(Math.floor(Math.random() * spiritAnimals.length))];

$("#greetingArea").text("Hi there, " + bakerName + "!");
// give them a personalized greeting
$("#animalArea").text("Your spirit animal is: " + randomAnimal);
// next, also tell spirit animal
 
})

