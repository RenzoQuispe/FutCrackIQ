# Apuntes

### Creación inicial del setup frontend:

```sh
npm install -g @angular/cli
ng new frontend
cd frontend
ng serve
```

- Angular CLI ya maneja la compilación de TypeScript.
- En desarrollo se usa ng serve (no ves los JS).
- En producción se corres ng build y subes la carpeta dist/.

Podemos ejecutar `ng serve` con host abierto con `ng serve --host 0.0.0.0 --port 4200`.

### Configuración src/environments/environment.ts

Ejemplo:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://192.168.1.8:3001'
};
```