/**
 * Created by Vladislav on 22.01.2018.
 */
var express = require('express');
var bodyParser = require('body-parser');
var routes =  require('./routes/Routes');
var router = express.Router();


var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


router.get('/' , routes.getnone);
router.post('/register', routes.register);
router.post('/login', routes.login);
router.get('/projects', routes.login);
router.delete('/project', routes.login);
router.get('/projects', routes.login);
router.post('/tasks', routes.login);
router.post('/login', routes.login);




app.use('/api', router);
app.listen(4000, function() {
    console.log("Server is running");
});
