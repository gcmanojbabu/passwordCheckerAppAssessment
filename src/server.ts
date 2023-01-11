import { IConfig } from './models/IConfig.model';

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config: IConfig = require('./../config/keys').config;
const appRouter = require('./routes/appRouter');
// const authRouter = require('./routes/authRouter');
// const productRouter = require('./routes/productRouter');
import { Request, Response, NextFunction } from 'express';

// Todo should add logger
const app = express();

// mongo db connection
mongoose.Promise = global.Promise;
mongoose.connect(
  config.DBSERVICE.mongoConnectionString,
  (err: any, db: any) => {
    if (!err) {
      console.log('Database Connected!');
    } else {
      console.log('Database Not Connected!');
    }
  }
);

const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (config.APP_LEVEL_CONFIG.whitelist === origin || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Hmm! I can't allow you"));
    }
  },
  optionsSuccessStatus: 200
};

app.use(cors("*"));
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/static", express.static(__dirname + './../public/files/productImages/'));


app.use(config.APP_LEVEL_CONFIG.prefixURL, appRouter);


// for production routing
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build/'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, 'client', 'build', 'index.html')
    );
  });
}

const PORT = process.env.PORT || config.APP_LEVEL_CONFIG.port;
var listener = app.listen(PORT, function () {
  console.log('Server Started on port ' + listener.address().port);
});
