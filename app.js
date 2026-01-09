const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`Hello from Docker Swarm! Running on container: ${process.env.HOSTNAME}`);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
