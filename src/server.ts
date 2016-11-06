import path = require('path');
import url = require('url');
import express = require('express');
import webpack = require('webpack');
import compression = require('compression');

import config from './serverConfig';
import indexTemplate from './indexTemplate';
import webpackConfig from './webpack.config';

const app = express();

if (config.development) {
  // tslint:disable
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  // tslint:enable

  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: { chunks: false },
  }));
  app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));

  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(compression());
  app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));
  app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));
}

app.get('*', function(request, response) {
  response.send(indexTemplate());
});

app.listen(config.port || 8080, function(err: Error) {
  if (err) {
    // tslint:disable
    console.log(err);
    // tslint:enable
    return;
  }

  // tslint:disable
  console.log('Listening at http://localhost, port', config.port);
  // tslint:eisable
});
