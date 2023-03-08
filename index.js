const express = require('express');
const app = express();
const port = 3000;
const routerApi = require ('./routes')
app.use (express.json());

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

routerApi(app)

app.listen(port)
