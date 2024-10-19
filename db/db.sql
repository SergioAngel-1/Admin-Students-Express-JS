CREATE DATABASE IF NOT EXISTS escuela;

USE escuela;

CREATE TABLE IF NOT EXISTS alumnos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  edad INT NOT NULL
);

INSERT INTO alumnos (nombre, apellido, edad) VALUES
('Juan', 'Pérez', 20),
('María', 'González', 22),
('Carlos', 'Rodríguez', 21);