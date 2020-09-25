const fs = require('fs');

const ls = function() {
    // console.log(fs.readdir())
    fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
            throw(err)
        } else {
            process.stdout.write(files.join('\n'));
            process.stdout.write("\nprompt > ");
        }
    })
    // process.stdout.write('\nprompt > ');
}

module.exports = ls;