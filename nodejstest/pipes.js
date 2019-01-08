const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();

// compress to a zip
// and use pipe
// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('example2.txt.gz');
// readStream.pipe(writeStream);
// readStream.pipe(gzip).pipe(writeStream);


// read from zip
const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt')
const gunzip = zlib.createGunzip();
readStream.pipe(gunzip).pipe(writeStream);
