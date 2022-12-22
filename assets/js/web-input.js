const myForm = document.getElementById("myForm");
const csvFile = document.getElementById("csvFile");
let formattedCSV = []
let headers = ""


function csvToArray(str, delimiter = ",") {

  const headers = str.slice(0, str.indexOf("\r\n")).split(delimiter)

  const rows = str.slice(str.indexOf("\r\n")).split("\r\n");
  const arr = rows.map(function (row) {
    const values = row.split(delimiter);
    const el = headers.reduce(function (object, header, index) {
      object[header] = values[index];
      return object;
    }, {});
    return el;
  });

  // return arr;
  // console.log(arr)
}

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const input = csvFile.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    
    const text = e.target.result;
    const data = csvToArray(text);
    formattedCSV = data
  };
  
  reader.readAsText(input);
  // console.log(formattedCSV)
});

