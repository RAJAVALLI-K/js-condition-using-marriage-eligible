// write a program to find marriage eligibility based on marital status, gender, and age.
// For example, married, not eligible. if unmarried check,  if the male age is greater than 21,
// For female age, must be greater than 18 then eligible for marriage.

let gen = prompt("Enter your gender:");
let age = parseInt(prompt("Enter your age:"));

if (gen == "m" && age > 21) {
    console.log("marriage eligibility");
}
else if (gen == "f" && age > 18) {
    console.log("marriage eligibility");
}
else{
    console.log("Not marriage eligibility");
}
