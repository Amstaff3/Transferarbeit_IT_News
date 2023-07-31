const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

const directoryPath = path.join(__dirname, 'img');

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach(function (file) {
        if(path.extname(file) === '.webp'){
            let fileName = path.basename(file, '.webp')
            sharp(directoryPath + '/' + file)
            .jpeg()
            .toFile(directoryPath + '/' + fileName + '.jpg', (err, info) => { 
                if(err) {
                    console.log('Error during conversion:', err);
                } else {
                    console.log('Image converted successfully:', info);
                }
            });
        }
    });
});

/* Test 1
const sharp = require('sharp');

sharp('input.webp')
  .jpeg()
  .toFile('output.jpg', (err, info) => { 
    if(err) {
        console.log('Fehler bei der Konvertierung:', err);
    } else {
        console.log('Bild erfolgreich konvertiert:', info);
    }
  });
*/