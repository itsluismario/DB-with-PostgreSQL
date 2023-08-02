<p align="center">
  <a href="https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/backend-node-82a9a4bf-7ce4-4437-86f6-c39dcce17d15.png" target="_blank">
    <img alt="Curso de Backend con Node.js: Base de Datos con PostgreSQL" src="https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/backend-node-82a9a4bf-7ce4-4437-86f6-c39dcce17d15.png" width="60" />
  </a>
</p>
<h1 align="center">
Curso de Backend con Node.js: Base de Datos con PostgreSQL
</h1>
<p align="center">
  <a href="https://api-rest-with-express.vercel.app/api/" target="_blank">
    https://api-rest-with-express.vercel.app/api/
  </a>
</p>

[Curso de Backend con Node.js: Base de Datos con PostgreSQL](https://platzi.com/cursos/backend-nodejs-postgres/) hecho por [@itsluismario](https://twitter.com/itsluismario) 

* [Guía rápida](#-gu%C3%ADa-rápida)
* [Logros](#-logros)

### 🤖 Guía Rápida

1.  **Empieza a desarrollar.**

  Crea tu proyect    

  ```
  npm init -y
  ```

## Buenas practicas

  .editorconfig → es para que todos los devs tengan la misma config.

  Instalar Editorconfig

  El siguiente código se obtiene del curso

### Para .editorconfig

  ```
  # Editor configuration, see https://editorconfig.org
  root = true

  [*]
  charset = utf-8
  indent_style = space
  indent_size = 2
  insert_final_newline = true
  trim_trailing_whitespace = true

  [*.js]
  quote_type = single

  [*.md]
  max_line_length = off
  trim_trailing_whitespace = false
  ```

### Para .eslintrc.json

  ```
  {
      "parserOptions": {
        "ecmaVersion": 2018
      },
      "extends": [
        "eslint:recommended",
        "prettier"
      ],
      "env": {
        "es6": true,
        "node": true,
        "jest": true
      },
      "rules": {
        "no-console": "warn"
      }
    }
  ```

### Agregar los scripts e installar la dep de desarrollo

  ```
  "scripts": {
      "dev": "nodemon index.js",
      "start": "node index.js",
      "lint": "eslint"
    },
  ```

  La -D es porque es para dependencia de desarrollo

  ```
  npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier pritter -
  ```

  Con `npm run dev` va a correr nodemon y va a escuchar todos los archivos de JS y hacer un reload

    Correlo

    ```
    npm run dev
    ```

    El sitio estará disponible en https://api-rest-with-express.vercel.app/api/.

  ```
  npm i express 
  ```

  Recuerda que es muy diferente las dependencies a las devDependencies

  ```
  "dependencies": {
      "express": "^4.18.2"
    },
    "devDependencies": {
      "eslint": "^8.43.0",
      "eslint-config-prettier": "^8.8.0",
      "eslint-plugin-prettier": "^4.2.1",
      "nodemon": "^2.0.22",
      "prettier": "^2.8.8"
    }
  ```

  En index.js configura el servidor

  ```
  const express = require('express');
  const app = express();
  const port = 3000;

  // app has always two params
  app.get('/', (req, res) => {
    res.send('Hi, my server in express');
  });

  // You must neve user console.log in production, only for dev
  app.listen(port, () => {
    console.log('My port' + port);
  });

  ```

  Corre `npm run dev` probarlo

### 🚀 Logros

  1. Aprender sobre la persistencia de datos en Node.js utilizando PostgreSQL como base de datos relacional.
  2. Conectar tu API REST con la base de datos relacional usando Sequelize, el ORM más popular en el entorno JavaScript.
  3. Dominar el uso de Sequelize para realizar consultas, establecer relaciones entre tablas y realizar migraciones en tu aplicación.
  4. Resolver problemas avanzados relacionados con migraciones entre Sequelize, Heroku y Node.js.
    5. Trabajar en Postgres utilizando diversas interfaces, como interfaces gráficas, la terminal y código JavaScript.
  6. Configurar tu entorno de desarrollo con Docker, lo que facilita la configuración y gestión del ambiente de desarrollo para tu proyecto.


### Para probarlo
  Se usaron los métodos GET, POST, PUT/PATCH y DELETE para cada ruta por lo que es posible hacer CRUD en cada una. 

  Para acceder a cada ruta es de la siguiente manera:

  - Categories: https://infinite-stream-05645-50dbc7bba9fc.herokuapp.com/api/v1/categories/ 

  - Products: https://infinite-stream-05645-50dbc7bba9fc.herokuapp.com/api/v1/products/
  
  - Users: https://infinite-stream-05645-50dbc7bba9fc.herokuapp.com/api/v1/users/

  - Customers: https://infinite-stream-05645-50dbc7bba9fc.herokuapp.com/api/v1/customers/

  - Orders: https://infinite-stream-05645-50dbc7bba9fc.herokuapp.com/api/v1/orders/
   
Happy hacking!
