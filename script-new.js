// Question 1
let cat = {complain : "meow"};
// Question 2
document.querySelector("h3");
//Question 3
const heading3 = document.querySelector("h3");
heading3.style.fontSize = "2em";
//Question 4
 heading3.classList.add("subheading");
//Question 5 
const paragraphs = document.querySelectorAll("p");
//Question 6
const resultsContainer = document.getElementsByClassName("results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
//Question 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

let catArray = cats.name
function logName(catArray){
    for (let i = 0; i < catArray.length; i++) {
        console.log(catArray[i].name)
    } 
};
logName(cats);

//Question 8
function logName(catArray){
    let catHTML = "";

    for (let i = 0; i < catArray.length; i++) {
        catHTML += `<h5>${catArray[i].name}</h5>`;
    } 
    console.log(catHTML);
};

//Question 9 
function logName(catArray){
    let catHTML = "";

    for (let i = 0; i < catArray.length; i++) {
        catHTML += `<h5>${catArray[i].name}</h5>`;
    } 
    return catHTML;
};
//Question 10 / not complete
function logName(catArray){
    let catHTML = "";

    for (let i = 0; i < catArray.length; i++) {
        catHTML += `<h5>${catArray[i].name}</h5>
                    <p>${catArray[i].age}</p>`;
    }
    console.log(catHTML);
};