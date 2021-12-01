//console.log("hello world");


//let toggler = "Matt Novis"; // Let creates something that hold value creates a variable
//let booleanValue = true;
//let number = 1;
//console.log(1 + 1);
//alert(toggler);
//console.log(toggler)
/* 
strings words 
numbers numbers
boolean true or false 
null non existent value
undefined blank value
*/

/* 
    Menu Toggler
    1. Listen for a click on .navbar-toggler
    2.Store the value attribute "data-target"
    3. Toggle thee .open class for the navigation element
*/
let toggler = document.querySelector(".navbar-toggler");

console.log(toggler);

toggler.onclick = function(){ 
    let attribute = this.getAttribute("data-target");
    let navigation = document.querySelector(attribute);
    navigation.classList.toggle("open");
    console.log(navigation);

}
/* 
    Dropdown Toggler 
    1. Listen for click on .dropdown > a
    2. toggle the .open class for the navigation element
*/
let dropdownToggler = document.querySelectorAll(".dropdown > a")

dropdownToggler.forEach(function(dropdown){
    dropdown.onclick = function (e){
        e.preventDefault();
        this.closest(".dropdown").classList.toggle("open");
    }
    console.log(dropdown);
})

/* 
   End Menu Toggler
*/