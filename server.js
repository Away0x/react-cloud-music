const express = require('express');
const compression = require('compression');

const port = process.env.PORT || 8010;
const app = express();

app.use(compression());
app.use(express.static('./build'));
app.use('/storybook', express.static('./storybook-static'));

module.exports = app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${port}\n`);
});
