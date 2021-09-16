const
    express = require('express'),
    router = require('./routes/index'),
    multer = require('multer'),
    upload = multer();
    port = process.env.PORT || 3000,
    viewDir = `${__dirname}/views`,
    publicDir = express.static(`${__dirname}/public`),
    app = express();

app
    .set('port', port)
    .set('view engine', 'pug')
    .set('views', viewDir)
    .use(express.json()) 
    .use(express.urlencoded({
      extended: true
    }))    
    .use(upload.none())
    .use(publicDir)
    .use(router);

module.exports = app;