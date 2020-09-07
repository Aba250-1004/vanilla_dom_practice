// Get the element with the id you assigned and save it to a 
// variable . Console.log that variable.

const id = document.querySelector("#divParagraph")
console.log(id);

//Get the h2 element and save it to a variable h2. 
//Console.log that variable

const h2 = document.querySelector("h2")
console.log(h2);

// Using JavaScript, change the innerText of your 
// h2 to have 3 exclamation points at the end

h2.innerText +=  "!!!";

//Get all of the elements with the class you assigned
// and save them to a variable. Console.log that variable.

const classTags = document.querySelectorAll(".container")
console.log(classTags)

// Change the style/color of the text of your ONE 
// of your li elements to your favorite html color

classTags[1].style.color = "green";

// Change the innerText of one of your list items to 'Jamboree sandwich at the Jambo-ree'
document.querySelector("li").innerText = "Jamboree sandwich at the Jambo-ree";

// Create a new img element using document.createElement()

const img1 = document.createElement("img")
img1.setAttribute("src","DOMTree.jpg");
img1.setAttribute("width","100%")

console.log(img1);
document.body.appendChild(img1)

// Change the style/color of the text of your ALL of your
// li elements to another favorite html color

// ATEMPT TO DO THIS DOESNT WORK

const LIlist = document.querySelectorAll("li");
// for(var i = 0; i < LIlist.length; i++){
//     LIlist[i].style.setAttribute("color","purple");
// }



//Remove an element 
document.querySelector("p").remove();
