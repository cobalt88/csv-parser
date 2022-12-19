/*
================================================
CONCEPT TEST - STATIC CSV TO JSON CONVERSION
================================================
practical example of how the conversion logic works. 
*/

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

