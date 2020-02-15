const express = require('express');
const massive = require('massive');
const app = express();

require("dotenv").config();

// Middlewares
app.use(express.json());


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
