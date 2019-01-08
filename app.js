var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

/*
var logger = function(req, res, next) {
    console.log('Logging...');
    next();
}

app.use(logger);
*/


// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

// set static path
app.use(express.static(path.join(__dirname, 'public')))

// var person = {
//     name: 'Sid',
//     age: 29
// }
// at this point in the browser it will print Cannot GET /
// since the route is not set yet to resolve you need to add a route

var users = [
    {
        id : 1,
        first_name : 'John',
        last_name : 'Doe',
        email: 'johndoe@gmail.com'
    },
    {
        id : 2,
        first_name : 'Bob',
        last_name : 'Smith',
        email: 'bobsmith@gmail.com'
    },
    {
        id : 3,
        first_name : 'Jill',
        last_name : 'Jacksom',
        email: 'jjackson@gmail.com'
    }
]
app.get('/', function(req, res) {    

    res.render('index', {
        title : 'Customers'
    })
    // res.send('Hello');
    // res.json(person)
});

app.listen(3000, function(){
    console.log('server started on port 3000...')
})

