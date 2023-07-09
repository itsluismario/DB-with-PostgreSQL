<p align="center">
  <a href="https://static.platzi.com/media/achievements/badge-backend-nodejs-apirest-expressjs-3fc7bca3-8dcb-459c-9638-12c92d502f5f.png" target="_blank">
    <img alt="Curso de Backend con Node.js: API REST con Express.js" src="https://static.platzi.com/media/achievements/badge-backend-nodejs-apirest-expressjs-3fc7bca3-8dcb-459c-9638-12c92d502f5f.png" width="60" />
  </a>
</p>
<h1 align="center">
  Curso de Backend con Node.js: API REST con Express.js
</h1>
<p align="center">
  <a href="https://api-rest-with-express.vercel.app/api/" target="_blank">
    https://api-rest-with-express.vercel.app/api/
  </a>
</p>

[Curso de Backend con Node.js: API REST con Express.js](https://platzi.com/cursos/backend-nodejs/) hecho por [@itsluismario](https://twitter.com/itsluismario) 

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

1. Desarrollar backend con Node.js
2. Trabajar con rutas, servidores y middlewares de Express.js
3. Construir una API REST
4. Manipular errores en la aplicación
5. Realiza validación de datos
6. Despliegar la aplicación en producción utilizando Heroku y Vercel


### Para probarlo
  Se usaron los métodos GET, POST, PUT/PATCH y DELETE para cada ruta por lo que es posible hacer CRUD en cada una. 

  Para acceder a cada ruta es de la siguiente manera:

  - Categories: https://api-rest-with-express.vercel.app/api/v1/categories/ 

  - Products: https://api-rest-with-express.vercel.app/api/v1/products/
  
  - Users: https://api-rest-with-express.vercel.app/api/v1/users/
   
Happy hacking!
