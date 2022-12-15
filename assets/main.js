// const myForm = document.getElementById("myForm");
// const csvFile = document.getElementById("csvFile");

const fs = require('fs');
const path = require('path');
const objArr = []

fs.readFile(path.join(__dirname, 'laticrete_zips.csv'), 'utf-8', (error, csv) => {
  if (error) {
    throw error;
  }

  const rows = csv.split('\r\n');
  
  const headers = rows[0].split(",")
  
  const objects = rows.map(row => {
    const values = row.split(',');
    const object = {};
    values.forEach((value, index) => {
      object[headers[index]] = value;
    }); 
    objArr.push(object)
  });
  console.log(objArr)
});



// function csvToArray(str, delimiter = ",") {

//   // slice from start of text to the first \n index
//   // use split to create an array from string by delimiter
//   const headers = str.slice(0, str.indexOf("\n")).split(delimiter);

//   // slice from \n index + 1 to the end of the text
//   // use split to create an array of each csv value row
//   const rows = str.slice(str.indexOf("\n")).split("\n");

//   // Map the rows
//   // split values from each row into an array
//   // use headers.reduce to create an object
//   // object properties derived from headers:values
//   // the object passed as an element of the array
//   const arr = rows.map(function (row) {
//     const values = row.split(delimiter);
//     const el = headers.reduce(function (object, header, index) {
//       object[header] = values[index];
//       return object;
//     }, {});
//     return el;
//   });

//   // return the array
//   return arr;
// }

// myForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const input = csvFile.files[0];
//   const reader = new FileReader();

//   reader.onload = function (e) {
//     const text = e.target.result;
//     const data = csvToArray(text);

//     data.forEach(e => {
//       console.log(e)
//     });
//   };
  
//   reader.readAsText(input);
// });

//==============================================

