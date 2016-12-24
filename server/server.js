import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from '../shared/routes';


const app = express();
app.use((req, res) => {
  const history = createHistory();
  const location = history.location;

  const HTML = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Etherpad React</title>
    </head>
    <body>
      <div id="react-view"></div>
      <h1>Etherpad react</h1>
      <script type="application/javascript" src="/bundle.js"></script>
    </body>
  </html>
  `;

  res.end(HTML);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Server listening on', PORT);
});

export default app;
