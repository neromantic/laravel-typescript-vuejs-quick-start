# Laravel Typescript and VueJs Quick-Start-Project
It is a project for quick-start-development on Laravel-Typescript-VueJS base.
The Project is configured using: 

First you should do:

````
npm i && npm run dev
````

tsconfig.json

````
{
    "compilerOptions": {
        "moduleResolution": "Node",
        "module": "CommonJS",
        "target": "ES2020",
        "noImplicitAny": false,
        "sourceMap": false,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "allowJs": true
    },
    "include": ["resources/ts/**/*"],
  }
````

webpack.mix.js

````
const mix = require('laravel-mix');

mix.sass('resources/sass/app.scss', 'public/css')
    .ts('resources/ts/app.ts', 'public/js');
````

If you have any question please ask Stack Overflow, becouse i am not better, than Stack Overflow)

## Good Luck !
