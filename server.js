const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const restaurantRouter = require('./routes/restaurant');

app.use(express.static('./public'));
app.use(express.json());

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/v1/restaurant', restaurantRouter);

const port = 5000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();