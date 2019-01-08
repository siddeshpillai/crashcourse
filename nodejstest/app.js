// const tutorial = require('./tutorial');
// console.log(tutorial);
// console.log(tutorial.sum(1,1));
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObject());

// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial', (num1,num2) => {
//     console.log('tutorial event has occurred', num1+num2);
// });

// eventEmitter.emit('tutorial', 1,2);

// class Person extends EventEmitter {
//     constructor(name) {
//         super();
//         this._name = name;
//     }

//     get name() {
//         return this._name;
//     }
// }

// let sid = new Person('Sid');
// let nits = new Person('Nits');

// nits.on('name', ()=> {
//     console.log('my name is ' + nits.name)
// });

// sid.on('name', () => {
//     console.log('my name is ' + sid.name)
// })

// sid.emit('name');
// nits.emit('name');


// const readline = require('readline');
// const rl = readline.createInterface({input: process.stdin,
//                           output: process.stdout});

// let num1 = Math.floor((Math.random() * 10) + 1);
// let num2 = Math.floor((Math.random() * 10) + 1);

// let answer = num1+ num2;

// rl.question(`what is ${num1} + ${num2} ? \n`,
// (userInput) => {
//     if (userInput.trim() == answer) {
//         rl.close();
//     } else {
//         rl.setPrompt('Incorrect response please try again!\n');
//         rl.prompt();
//         rl.on('line', (userInput) => {
//             if (userInput.trim() == answer) {
//                 rl.close();
//             } else {
//                 rl.setPrompt(`Your answer of ${userInput} is incorrect! Try again \n`);
//                 rl.prompt();
//             }
//         });
//     }
// });

// rl.on('close', () => {
//     console.log('you got the correct answer!');
// });


// LOAD DEPENDENCIES

// npm install 'lodash'

// const _ = require('lodash')
// let example = _.fill([1,2,3,4,5], "banana", 1,4)
// console.log(example)

// npm uninstall 'lodash'

// "lodash": "^4.17.11" // major.minor.patch 
                         // ^ update only minor 4.x.x
                         // ~ update patch 4.17.x

// Add Express server

// const express = require('express');
// const app = express();

// app.get('/',(req, res)=>{
//     res.send('Hello world');
// });

// app.get('/example', (req,res)=>{
//     res.send('Hitting example route');
// });

// app.get('/example/:name/:age',(req,res)=>{
//     console.log(req.params);
//     console.log(req.query);
//     // res.send('example with route params');
//     res.send(req.params.name + ":" + req.params.age);
// });

// app.listen(3000);

// http get request


// give static alias handle 
// const express = require('express');
// const path = require('path')

// const app = express();
// app.use('/public', express.static(path.join(__dirname,'static')));
// app.get('/', (req,res)=>{
//     // res.send('Hello World!')
//     res.sendFile(path.join(__dirname, 'static', 'index.html'));
// });
// app.listen(3000);

// HTTP POST REQUEST USING EXPRESS

// const express = require('express');
// const path = require('path');
// const joi = require('joi');

// const arrayString = ['banana', 'bacon', 'cheese'];
// const arrayObjects = [{example : 'example1'}, {example : 'example2'}];

// const userInput = { personalInfo : {
//                         streetAddress : '12334232',
//                         city : 'wvwve',
//                         state : 'ca'
//                     },
//                     preferences : arrayString };

// const personalInfoSchema = joi.object().keys({
//     streetAddress : joi.string().trim().required(),
//     city : join.string().trim().required(),
//     state: joi.string().trim().length(2).required()
// });

// const preferencesSchema = joi.array().items(joi.string());

// const schema = joi.object().keys({
//     personalInfo : personalInfoSchema,
//     preferences : preferencesSchema
// });

// joi.validate(userInput, schema, (err, result) => {
//     if (err)
//         console.log(err)
//     else
//         console.log(result);
// });

// const app = express();
// const bodyParser = require('body-parser');

// // middleware
// app.use('/public', express.static(path.join(__dirname, 'static')));
// app.use(bodyParser.urlencoded({extended:false})); // false since no complicated objects
// app.use(bodyParser.json());

// app.get('/', (req,res)=>{
//     res.sendFile(path.join(__dirname, 'static', 'index.html'));
// });

// app.post('/', (req,res)=> {
//     console.log(req.body);
//     const schema = joi.object().keys({
//         email : joi.string().trim().email().required(),
//         password : joi.string().min(5).max(10).required()
//     });    

//     joi.validate(req.bodyParser, schema, (err,result) => {
//         if (err){
//             console.log(err)
//             res.send('an error has occured');
//         } else {
//             console.log(result);
//             res.send('successfully posted data');    
//         }
//     });
//     // data base work here
//     // res.send('successfully posted data');
//     // res.json({success: true});    
// });

// app.listen(3000);

// EJS is a template language

// const express = require('express');
// const path = require('path');
// const app = express();

// app.use('/public', express.static(path.join(__dirname, 'static', 'index.html')));
// app.set('view engine', 'ejs');
// app.get('/:userQuery', (req,res)=>{
//     // res.sendFile(path.join(__dirname, 'static', 'index.html'));
//     res.render('index', {data: {userQuery : req.params.userQuery,
//                                 searchResults : ['book1', 'book2', 'book3'],
//                                 loggedIn : true,
//                                 username : "vuwbvwi"}}); // no need .ejs since we set es
// });

// app.listen(3000);


// Creating your own middleware

// const express = require('express');
// const path = require('path');
// const bodyparser = require('body-parser');
// const app = express();


// app.use(bodyparser.json()); // parsers the user request and searches for json and attaches to req.body
// app.use((req,res,next) => {
//     req.banana = 'banana';
//     console.log(req.url,req.method);
//     next();
// });

// app.get('/', (req,res) => {
//     console.log(req.banana);
//     res.send('Middleware');
//     // res.sendFile(path.join(__dirname, 'static', 'index.html'));
// })
// app.listen(3000);


// work with express routing

const express = require('express');
const path = require('path');
const app = express();
const people = require('./routes/people');

app.use('/public', express.static(path.join(__dirname, 'static', 'index.html')));
app.set('view engine', 'ejs');

app.use('/people', people);

app.listen(3000);
