const express = require('express');
const massive = require('massive');
const app = express();
const hC = require('./controllers/homesController');

require("dotenv").config();

// Middlewares
app.use(express.json());
massive(process.env.DATABASE_URL).then(db => {
    app.set('db', db);
    // app.get('db').init();
    console.log("Connected to le DB");
});

// Listeners
app.get('/api/homes', hC.getHomes);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
