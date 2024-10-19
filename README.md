# Sistema de Gestión de Alumnos - Universidad San Buenaventura

Este proyecto es un sistema de gestión de alumnos desarrollado con Node.js, Express, y SQLite. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los registros de alumnos, así como visualizar los alumnos por cursos.

## Características

- Listado de alumnos
- Agregar nuevos alumnos
- Editar información de alumnos existentes
- Eliminar alumnos
- Ver lista de cursos
- Ver alumnos por curso

## Tecnologías utilizadas

- Node.js
- Express.js
- SQLite (base de datos en memoria)
- EJS (motor de plantillas)
- Bootstrap (para el diseño)
- Font Awesome (para los iconos)

## Estructura del proyecto

- `app.js`: Archivo principal del servidor
- `views/`: Directorio con las plantillas EJS
  - `layout.ejs`: Plantilla principal
  - `inicio.ejs`: Página de inicio
  - `crud.ejs`: Lista y gestión de alumnos
  - `agregar.ejs`: Formulario para agregar alumnos
  - `editar.ejs`: Formulario para editar alumnos
  - `cursos.ejs`: Lista de cursos
  - `curso.ejs`: Alumnos por curso
- `public/`: Directorio para archivos estáticos (imágenes, CSS, etc.)

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/tu-usuario/sistema-gestion-alumnos.git
   ```

2. Navega al directorio del proyecto:
   ```
   cd sistema-gestion-alumnos
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

4. Inicia el servidor de desarrollo:
   ```
   npm run dev
   ```

5. Abre tu navegador y visita `http://localhost:3000`

## Uso

- La página de inicio muestra una bienvenida al sistema.
- En la sección "CRUD" puedes ver la lista de alumnos, agregar nuevos, editar o eliminar existentes.
- En la sección "Cursos" puedes ver la lista de cursos disponibles y los alumnos inscritos en cada uno.

## Contribuir

Si deseas contribuir a este proyecto, por favor:

1. Haz un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Haz push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.