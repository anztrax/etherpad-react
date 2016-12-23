import express from 'express';

const app = express();

app.use((req, res) => {
  const HTML = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Etherpad React</title>
    </head>
    <body>
      <div id="react-view"></div>
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
