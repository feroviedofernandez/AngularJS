Para desarrollar con Angular JS primero tenemos que preparar el entorno de desarrollo.

### Paso 1. Configurar el entorno de desarrollo

Tenemos que tener instalados tanto node (al menos la versión 8.x) como npm (al menos la versión 5.x) ya que las versiones antiguas producen errores.

Tras ello instalaremos el Angular CLI globalmente

`npm install -g @angular/cli`

Angular CLI es una herramienta para inicializar, desarrollar mantener y hacer scaffold de aplicaciones de Angular.

### Paso 2. Crear un nuevo proyecto

Abre una consola.

Genera un nuevo proyecto y una aplicación por defecto con el siguiente comando:

`ng new my-app`

El Angular CLI instalará los paquetes de npm necesarios, creará los archivos y poblará el proyecto con una simple aplicación por defecto. Esto puede tardar un rato.

### Paso 3. "Serve the application"

Dirigete mediante la consola al directorio del proyecto y lanza el servidor:

```
cd my-app
ng serve --open
```

El comando `ng serve` lanza el servidor, comprueba tus archivos y de hacer cambios en estos, recompila tu aplicación.

La opcion `--open` o `-o` abrirá automáticamente tu navegador en `http://localhost:4200`.

Tu aplicación te dará un mensaje de bienvenida:

![Bienvenido a la aplicación](https://github.com/feroviedofernandez/AngularJS/tree/develop/Tutorial/Resources/bienvenido.PNG)

### Paso 4. Editar tu primer componente de Angular

El CLI ha creado el primer componente de Angular para ti. Este es el componente root y se llama `app-root`. Puedes encontrarlo en `./src/app/app.component.ts`.

Abre el archivo del componente y cambia la propiedad `title` de `"app"` a `"My First Angular App!"`.

```typescript
export class AppComponent {
  title = 'My First Angular App!';
}
```

El navegador refrescará automáticamente la página con el nuevo título.

Ahora vamos a abrir `src/app/app.component.css` y vamos a darle algunos estilos:

```css
h1 {
    color: #369;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 250%;
}
```

![Estilos h1](https://github.com/feroviedofernandez/AngularJS/tree/develop/Tutorial/Resources/bienvenido2.PNG)

