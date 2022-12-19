fetch('my-file.csv')
  .then(response => response.text())
  .then(csv => {
    const rows = csv.split('\n');
    const objects = rows.map(row => {
      const values = row.split(',');
      const object = {};
      values.forEach((value, index) => {
        object[index] = value;
      });
      return object;
    });
    console.log(objects);
  });

  fetch('my-file.csv')
  .then(response => response.text())
  .then(csv => {
    const objects = Papa.parse(csv, {
      header: true,
      dynamicTyping: true
    });
    console.log(objects);
  });
