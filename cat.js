const fs = require('fs');

const cat = function(filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    console.log(data.toString().trim());
  })
}


module.exports = cat;

//ls
//
