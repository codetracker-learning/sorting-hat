// Start arrays section
const students = [
  // { 
    // name: ,
    // house: ,
    // color: ,
  // },
];

const trueBelievers = [
  {
    // name:
    // house: "It's Marvel Baby!",
    // color: "red";
  }
];
// End arrays section

// Start SPA interactivity functions section
// Create function to display Bootstrap Form once Jumbotron button clicked
function showForm() {
  document.querySelector("#sortingDiv").style.display = "block";
};

// Validate form -- NEED TO MAKE SURE THIS WORKS
function validateForm() {
  var x = document.forms["sortForm"]["name"].value;
  if (x == "") {
    alert("We need a name, dwaog!");
    return false;
  }
}
// End SPA interactivity functions sections

// Start print to DOM section
// Create function to print to DOM
const printToDom = (divId, textAsHtml) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML =textAsHtml;
};

// Create function to create DOM string and .innerHTML
const studentRosterBuilder = (arrayOfObjects) => {
  let domString = "";

  arrayOfObjects.forEach((object, i) => {
    domString += `<div class="card my-2" style="width: 20rem;" id=${i}>
                    <div class="card-body">
                      <h.card-title>${object.name}</h.card-title>
                      <p class="card-text">${object.house}</p>
                      <button type="button" class="btn btn-danger" id="${i}">Expulsion! </button>
                    </div>
                  </div>
    `
    printToDom("#studentCards",domString);

  })
}
// End print to DOM section

// Start anonymous functions
// C in CRUD
// Create function to enroll student into students array and print array to DOM as cards
const enrollStudent = (e) => {
  // Stops page from refreshing
  e.preventDefault();

  // Grab values from the form
  const name = document.querySelector("#name").value;
        // note this is placeholder, will build a randomizer function
  const house = "Griffendor";
  const color = "red";

  // Shorthand object notation to add form detail to students array
  const obj = {
    name,
    house,
    color,
  };

  // Push new entry into students array
  students.push(obj);

  // Rebuild the DOM
  studentRosterBuilder(students);

  // Reset the form fields
  document.querySelector("form").reset();

};
// Create function to expel student and enlist them in trueBelievers instead
const expelStudent = (e) => {
  const targetType = e.target.type;
  const targetId = e.target.id;

  if (targetType==="button" && students.length > 1) {
    console.log(targetId);
    students.splice(targetId,1);
  } else if (targetType==="button" && students.length == 1) {
    const students = [];
  }

  studentRosterBuilder(students);
};
// End anonymous functions



// Start Event recording
// Capture button clicks and say what they do
const buttonEvents = () => {
  // listen for submit button
  document.querySelector("form").addEventListener("submit", enrollStudent);
  // listen for delete button
  document.querySelector("#studentCards").addEventListener("click",expelStudent);
};
// End Event recording


// Create init() function
const init = () => {
  buttonEvents();
  // validateForm();
};

init();
