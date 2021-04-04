
var http = require("http");
var express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require("helmet");
var app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3001;
var session = require('express-session')
//fileUpload = require('express-fileupload'),
const fs = require("fs");

// SETUP MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());
app.use(helmet());
app.enable('trust proxy');

var UserRoutes = require('./routes/user.routes');
app.use('/api/users', UserRoutes);

app.set('trust proxy' ,1)
app.use(session({ secret: 'secret c0de',
resave:false,
saveUninitialized:true,
 cookie: {
   //httpOnly: true,
    maxAge: 600000 }}));

 app.use((req, res, next) => {
   console.log(req.session);
  // if (req.cookies.userid && !req.session.username) {
  //     res.clearCookie('userid');        
  // }
  next();
});

 




server.listen(port, () => console.log(`Listening on port ${port}`));