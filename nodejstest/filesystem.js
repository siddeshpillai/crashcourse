const fs = require('fs');

//create a file

// fs.writeFile('example.txt', "this is an example", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File created successfully!');
//         fs.readFile('example.txt', 'utf8', (err, file) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(file);
//             }
//         })
//     }
// });


// rename

// fs.rename('example.txt', 'renamedfile.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('successfully renamed the file');
//     }
// });

// append data to file

// fs.appendFile('renamedfile.txt', 'Some data being appended', (err)=> {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('successfully appended data to teh file');
//     }
// });

// delete a file

// fs.unlink('renamedfile.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(' successfully deleted');
//     }
// });

// create a folder
// fs.mkdir('tutorial', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('folder created');
//     }
// });

// delete folder - only works if teh directory is empty

// fs.rmdir('tutorial', (err) => {
//     if (err)
//         console.log(err)
//     else
//         console.log('successfully deleted the folder')
// });

// create a file inside a folder

// fs.mkdir('tutorial', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('folder created');
//         fs.writeFile('./tutorial/example.txt', "123", (err) => {
//             if (err)
//                 console.log(err);
//             else
//                 console.log('successfully created file!')
//         });
//     }
// });

// delete a folder with a file in it

// fs.unlink('./tutorial/example.txt', (err)=>{
//     if (err)
//         console.log(err)
//     else {
//         console.log("Successfully deleted the file")

//         fs.rmdir('tutorial', (err) => {
//             if (err)
//                 console.log(err)
//             else
//                 console.log('successfully deleted the folder')
//         });        
//     }
// });

// delete folder which has multiple files

// fs.readdir('./newfolder', (err, files) => {
//     if (err) 
//         console.log(err)
//     else {
//         console.log(files)
        
//         for (let file of files) {
//             fs.unlink('./newfolder/'+file, (err) => {
//                 if (err)
//                     console.log(err)
//                 else    
//                     console.log('successfully deleted teh file')
//             })
//         }
        
//         fs.rmdir('newfolder', (err) => {
//             if (err)
//                 console.log(err)
//             else
//                 console.log('successfully deleted the folder')
//         });      
//     }
// });

// readable streams
// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('./example2.txt');

// readStream.on('data', (chunk) => {
//     // write while reading
//     writeStream.write(chunk);
//     // console.log(chunk);
// });

// const readStream = fs.createReadStream('./largefile.txt');

// readStream.on('data', (chunk) => {
//     console.log(chunk);
// });
