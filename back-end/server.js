const express = require('express');
const mainRouter = require('./routes/main-route');

require('dotenv').config();
const cors = require('cors');
const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json());
app.use(mainRouter);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
