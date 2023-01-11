import { IConfig } from './../src/models/IConfig.model';

const path = require('path');

export const config: IConfig = {
  DBSERVICE: {
    mongoConnectionString:
      'mongodb+srv://devdb:devdbauth@cluster0.jvvsy.mongodb.net/PasswordChecker?retryWrites=true&w=majority'
  },
  APP_LEVEL_CONFIG: {
    port: 8200,
    enableUIStaticFolder: false,
    environment: 'production',
    whitelist: '*',
    prefixURL: '/api/v1',
    authAppPrefixURL: '/api/v1/auth',
    productAppPrefixURL: '/api/v1/product',
    rootDir: path.join(__dirname, '../')
  },
  baseUrl: 'http://localhost:8200'
};
