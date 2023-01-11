import { IConfig } from './../src/models/IConfig.model';

export let config: IConfig = null;

if (process.env.NODE_ENV === 'production') {
  config = require('./production').config;
  // } else if (process.env.NODE_ENV === 'staging') {
  //   config = require('./staging').config;
} else {
  config = require('./development').config;
}
