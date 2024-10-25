const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const studentRoutes = require('./routes/students');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = 3030;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(expressLayouts);

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/main');

// Routes
app.get('/', (req, res) => res.redirect('/students'));
app.use('/students', studentRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});