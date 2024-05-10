const qrcode = require('qrcode-terminal');
const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter the data for the QR Code: ', (data) => {
  qrcode.generate(data, { small: true }, (qr) => {
    readline.question('Enter the desired filename for the QR Code: ', (filename) => {
      fs.writeFileSync(`${filename}.jpg`, qr);
      console.log(`QR Code saved as ${filename}.jpg`);
      readline.close();
    });
  });
});