var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var mongojs = require('mongojs')
var db = mongojs("customerapp", ['users'])

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

// Global Vars
app.use(function(req,res,next){
    res.locals.errors = null;
    next();
});

// Express validator middleware
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.'),
        root = namespace.shift() ,
        formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg : msg,
            value : value
        };
    }
}));

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

    db.users.find(function (err, docs) {
        console.log(docs);
        res.render('index', {
            title : 'Customers',
            users :  users
        });    
    })

    // res.send('Hello');
    // res.json(person)
});

app.post('/users/add', function(req,res){

    req.checkBody('first_name', 'First Name is required').notEmpty();
    req.checkBody('last_name', 'Last Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();

    var errors = req.validationErrors();

    if (errors) {

        res.render('index', {
            title : 'Customers',
            users :  users,
            errors: errors
        });
        console.log('FAILED');
    } else {
        var newUser = {
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email : req.body.email
        }
    
        console.log('SUCCESS');
    }

});

app.listen(3000, function(){
    console.log('server started on port 3000...')
})

