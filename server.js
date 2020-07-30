const express = require('express');
const app = express();


app.use(express.static(`./dist/calendar-project`));
app.get(`/*`, function(req, res) {
    res.sendFile(`index.html`, {root: `dist/calendar-project/`})
  });
app.listen(process.env.PORT || 8080);
