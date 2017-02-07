
var currentDate = new Date();
var currentYear = currentDate.getFullYear();

// currentTest = new Date().getFullYear();


if (currentYear > 2015){
  console.log("Greetings from the future!");
}
else if(currentYear < 2015){
  console.log("Whoa! Blast from the past!");
}
else if (currentYear === 2015){
  console.log("I'm in the present!");
}
