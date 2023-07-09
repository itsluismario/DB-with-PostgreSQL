const express = require('express');
const app = express();
const routerApi = require('./routes');

// -- Assign the PORT if it comes from a env varaible
const port = process.env.PORT || 3000;

const cors = require('cors');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

// -- Middleware to enable to send json data
app.use(express.json());

// -- App has always two params
app.get('/api/', (req, res) => {
  res.send('Hi, my server in express');
});

// -- You must neve user console.log in production, only for dev
app.listen(port, () => {
  console.log('My port' + port);
});

// -- Middleware Cors
var allowedOrigins = ['http://127.0.0.1:5500',
                      'http://yourapp.com'];
const options = {
  origin: function(origin, callback){
    // allow requests with no origin
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
};

app.use(cors(options));

routerApi(app);

// -- Middleware must be declared after routing
// -- Consider which one goes first
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
