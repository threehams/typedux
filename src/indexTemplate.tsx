export const indexTemplate = () => {
  return `
    <!doctype html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Example McExampleFace</title>
      <link rel="stylesheet" href="/assets/style.css">
      <link rel="icon" href="assets/favicon.png" type="image/png" />
    </head>
    <body>
      <div id="root"></div>
      <script src="/dist/bundle.js"></script>
    </body>
    </html>
  `;
};
