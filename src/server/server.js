import Express from 'express';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from '../../webpack.config.dev';

const PORT = 3000;
const app = Express();
const htmlString = `<!DOCTYPE html>
    <html>
         <head>
            <title>Webpack and React</title>
          </head>
          <body>
            <div id="reactDiv" />
            <script src="http://localhost:3001/dist/bundle.js"></script>
          </body>
    </html>`;

app.use('/dist', Express.static('dist'));

const compiler = webpack(webpackConfig);
const webpackDevServer = new WebpackDevServer(compiler, {
  hot: true, // switch the server to hot mode.
  inline: true, // embed the webpack-dev-server runtime into the bundle.
  publicPath: webpackConfig.output.publicPath,
});
webpackDevServer.listen(PORT+1);

app.use((req, res) => {
  res.end(htmlString);
});

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});