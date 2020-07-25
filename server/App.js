const express = require('express');
const path = require('path');
let bodyParser = require('body-parser');
const app = express();
let mongoose = require('mongoose');
let dbConfig = require('../config/db');
let cookieParser = require('cookie-parser');
let qnaApi = require('./routes/qnaApi');
let cors = require('cors')
let passport = require('passport');
let expressSession = require('express-session');


mongoose.connect(dbConfig.url, function(err){
    //useMongoClient: true;
    if(err){
        console.log('Error connecting to:' + dbConfig.url + '.' + err) ;
    } else {
        console.log('MongoDb connected successfully to :' + dbConfig.url);
    }
});

//console.log(mongoose.connection.readyState);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

    // initializing passport
    app.use(expressSession({
        secret: 'mySecretKey',
        saveUninitialized: true,
        resave: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    let initpassport = require('./passport/init');
    initpassport(passport);

let users = require('./routes/user.route.js')(passport);
app.use('/users', users);
app.use('/qna',qnaApi);

app.listen(3001, () =>{
console.log('Express server listening on port : 3001');
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
    res.status(err.status || 500);
    console.log(err);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



module.exports = app;