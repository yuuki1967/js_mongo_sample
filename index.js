// simple web server
// run: node index.js
// http://localhost:3000
// http://localhost:3000/about
// http://localhost:3000/contact
// http://localhost:3000/anything
// mongoose is a library to connect to mongodb
// express is a library to create web server
// http is a library to create http server
// fs is a library to read/write files
const querystring = require('querystring');
const mongoose = require('mongoose');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const { kMaxLength } = require('buffer');
const app = express();

// set up rate limiter: maximum of five requests per minute
const RateLimit = require('express-rate-limit');
var limiter = RateLimit({
    windowMs: 1*60*1000, // 1 minute
    max: 5
});
// apply rate limiter to all requests
app.use(limiter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const server = http.createServer(app);
const port = 3000;
const host = 'localhost';
const url = `http://${host}:${port}`;
const db = mongoose.connection;
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const UserSchema = new Schema({
    id: ObjectId,
    name: String,
    age: Number
});
const User = mongoose.model('User', UserSchema);
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected to mongodb');
}
);

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);
app.get('/about', (req, res) => {
    res.send('About');
}
);
app.get('/contact', (req, res) => {
    res.send('Contact');
}
);

app.post('/user', (req, res) => {
    // add data to mongodb
    const user = new User({
        name: req.body.name,
        age: req.body.age
    });
    // save to mongodb
    user.save().then(item => {
        console.log('saved to mongodb');
        console.log(item);
        res.send('saved to mongodb');
    }).catch(err => {
        console.log(err);
        res.status(400).send('unable to save to mongodb');
    });
});

app.get('/user', async (req, res) => {
    // get data from mongodb
    const users = await User.find().exec();
    console.log(users);
    res.send(users);
}
);

// delete column from mongodb
app.delete('/user/:id', async (req, res) => {
    // delete data from mongodb
    // deletes user by id
  // id is passed in as a parameter
  // returns the deleted user

  const user = await User.deleteOne({_id: req.params.id}).exec();
    console.log(user);
    res.send(user);
}
);

// update column from mongodb
app.put('/user/:id', async (req, res) => {
    // update data from mongodb
    // escape character of req.body.name and req.body.age
    const name = querystring.escape(req.body.name);
    const age = querystring.escape(req.body.age); 
    const user = await User.updateOne({_id: req.params.id}, {
        name: name,
        age: age
    }).exec();
    console.log(user);
    res.send(user);
}
);

// delete all column from mongodb
app.delete('/user', async (req, res) => {
    // delete data from mongodb
    // deletes all users
  // returns the deleted users

  const user = await User.deleteMany().exec();
    console.log(user);
    res.send(user);
}
);

app.get('/anything', (req, res) => {
    res.send('Anything!');
}
);
// listen to port
server.listen(port, host, () => {
    console.log(`Server running at ${url}`);
}
);
