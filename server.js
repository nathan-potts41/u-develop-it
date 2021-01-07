const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();
const inputCheck = require('./utils/inputCheck');
const db = require('./db/database');
const apiRoutes = require('./routes/apiRoutes');

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//use apiRoutes
app.use('/api', apiRoutes);


//default response for any other request(Not Found) Catch All
app.use((req, res) => {
    res.status(404).end();
});

db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
