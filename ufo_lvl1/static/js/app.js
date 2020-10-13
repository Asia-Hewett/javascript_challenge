// from data.js
let tableData = data;

// Select the button
let button = d3.select("#filter-btn");

// Select the form
let form = d3.select("#form");

// Targeting the table body
let tbody = d3.select("tbody");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing after pressing enter
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  let inputElement = d3.select("#datetime");

  // Get the value property of the input element
  let inputValue = inputElement.property('value');
//   console.log(inputValue);

  // Use the form input to filter the data by blood type
  let filteredData = tableData.filter(sightings => sightings.datetime === inputValue);
//   console.log(filteredData);

// Loop that appends data to tables
    filteredData.forEach((sightingInfo) => {
        console.log(sightingInfo);
        let row = tbody.append('tr');
        Object.entries(sightingInfo).forEach(([key, value]) => {
            console.log(key, value);
            let cell = row.append('td');
            cell.text(value);
        });
    });
};



