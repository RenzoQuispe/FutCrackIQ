# Apuntes

### Creación inicial del setup backend:

Iniciar:

```sh
mkdir backend && cd backend
npm init -y
npm install express
npm install --save-dev typescript ts-node @types/node @types/express nodemon tsx
npx tsc --init
```

Escribres tu archivo `src/index.ts`.

Configurar correctamente el archivo `tsconfig.json`.

Compilas tu código:

```sh
npx tsc
```

Esto genera un dist/index.js que ya puede ejecutar Node:

```sh
node dist/index.js
```

NOTA: Podemos usar `nodemon` para monitorear los archivos del proyecto, de tal manera que cuando detecta un cambio, reinicia automáticamente tu aplicación.

### Setup backend/.env

```
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=
```