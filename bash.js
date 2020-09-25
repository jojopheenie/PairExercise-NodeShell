const pwd = require("./pwd.js");
const ls = require("./ls.js");
const cat = require("./cat.js");

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {

    const cmd = data.toString().trim();
    if([...cmd].length === 1) {
        runner(command);
    }

    else {
        const args = cmd.split(' ');
        const command = args[0];
        const fileName = args[1];
        cat(`${pwd()}/${fileName}`);
        process.stdout.write('\nprompt > ');
    }


    });

function runner (command, fileName) {
    if (cmd === 'pwd') {
        pwd();
    }
    else if (cmd === 'ls') {
        ls();
    }
    else {
        process.stdout.write('You typed: ' + cmd);

    }
    process.stdout.write('\nprompt > ');

}



