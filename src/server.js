const express = require('express');
const http = require('http');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const connectDB = require('../connection');
const taskRoutes = require('../src/routes/taskRoutes');

const app = express();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));  // Use express.urlencoded() instead of body-parser
app.use('/', taskRoutes);

const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server running on port: 8080');
});

connectDB();
