const fs = require('fs');

export function save(fileName, string) {
    fs.appendFile(fileName, string, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}