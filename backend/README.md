# Apuntes

### Creación inicial del setup backend:

Iniciar:

```sh
mkdir backend && cd backend
npm init -y
npm install express
npm install --save-dev typescript ts-node @types/node @types/express nodemon
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

####