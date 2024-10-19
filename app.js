const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3000;

// Configuración de la base de datos SQLite
const db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        console.error('Error al crear la base de datos:', err.message);
    } else {
        console.log('Conexión a la base de datos SQLite establecida');
        db.run(`CREATE TABLE alumnos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT,
      apellido TEXT,
      edad INTEGER,
      curso TEXT
    )`, (err) => {
            if (err) {
                console.error('Error al crear la tabla:', err.message);
            } else {
                console.log('Tabla alumnos creada');
                // Insertar algunos datos de ejemplo
                db.run(`INSERT INTO alumnos (nombre, apellido, edad, curso) VALUES 
          ('Juan', 'Pérez', 20, 'Matemáticas'),
          ('María', 'González', 22, 'Física'),
          ('Carlos', 'Rodríguez', 21, 'Química')`);
            }
        });
    }
});

// Configuración de EJS y archivos estáticos
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rutas
app.get('/', (req, res) => {
    res.render('layout', { content: 'inicio' });
});

app.get('/crud', (req, res) => {
    db.all('SELECT * FROM alumnos', [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.render('layout', { content: 'crud', alumnos: rows });
    });
});

app.get('/agregar', (req, res) => {
    res.render('layout', { content: 'agregar' });
});

app.post('/agregar', (req, res) => {
    const { nombre, apellido, edad, curso } = req.body;
    db.run('INSERT INTO alumnos (nombre, apellido, edad, curso) VALUES (?, ?, ?, ?)', [nombre, apellido, edad, curso], (err) => {
        if (err) {
            throw err;
        }
        res.redirect('/crud');
    });
});

app.get('/editar/:id', (req, res) => {
    const { id } = req.params;
    db.get('SELECT * FROM alumnos WHERE id = ?', [id], (err, row) => {
        if (err) {
            throw err;
        }
        res.render('layout', { content: 'editar', alumno: row });
    });
});

app.post('/editar/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, edad, curso } = req.body;
    db.run('UPDATE alumnos SET nombre = ?, apellido = ?, edad = ?, curso = ? WHERE id = ?', [nombre, apellido, edad, curso, id], (err) => {
        if (err) {
            throw err;
        }
        res.redirect('/crud');
    });
});

app.get('/eliminar/:id', (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM alumnos WHERE id = ?', [id], (err) => {
        if (err) {
            throw err;
        }
        res.redirect('/crud');
    });
});

app.get('/cursos', (req, res) => {
    db.all('SELECT DISTINCT curso FROM alumnos', [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.render('layout', { content: 'cursos', cursos: rows });
    });
});

app.get('/curso/:nombre', (req, res) => {
    const { nombre } = req.params;
    db.all('SELECT * FROM alumnos WHERE curso = ?', [nombre], (err, rows) => {
        if (err) {
            throw err;
        }
        res.render('layout', { content: 'curso', curso: nombre, alumnos: rows });
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});