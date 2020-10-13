// from data.js
let tableData = data;

// Select the button
let button = d3.select("#filter-btn");

// Select the form
let form = d3.select("#form");

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
  console.log(inputValue);
//   console.log(tableData);

//   // Use the form input to filter the data by blood type
//   let filteredData = tableData.filter(person => person.bloodType === inputValue);
//   console.log(filteredData);

//   // BONUS: Calculate summary statistics for the age field of the filtered data
//   let ages = filteredData.map(person => person.age);

//   // First, create an array with just the age values
//   let mean = math.mean(ages);
//   let median = math.median(ages);
//   let mode = math.mode(ages);
//   let variance = math.var(ages);
//   let standardDeviation = math.std(ages);

//   // lets find the unordered list
//   let list = d3.select(".summary");

//   // Removing the previous data
//   list.html("");

//   list.append('li').text(`Mean: ${mean}`);
//   list.append('li').text(`Median: ${median}`);
//   list.append('li').text(`Mode: ${mode}`);
//   list.append('li').text(`Variance: ${var}`);
//   list.append('li').text(`StandardDeviation: ${std}`);

};


