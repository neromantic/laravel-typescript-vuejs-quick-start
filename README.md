# Laravel Typescript and VueJs Quick-Start-Project
It is a project for quick-start-development on Laravel-Typescript-VueJS base.
The Project is configured using: 

tsconfig.json
````
{
    "compilerOptions": {
        "moduleResolution": "node",
        "module": "commonjs",
        "target": "esNext",
        "noImplicitAny": false,
        "sourceMap": false,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "allowJs": true
    },
    "include": ["resources/ts/**/*"],
  }
````
#
and webpack.mix.js
````
const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .webpackConfig({
        module: {
            rules: [{
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: { appendTsSuffixTo: [/\.vue$/] },
                exclude: /node_modules/,
            }]
        },
        resolve: {
            extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"]
        }
    });
````
#
The architecture of the resources folder:

````
resources/
    js/
        components/
            MainApp.vue
        app.js
        bootstrap.js
    lang/
        ...
    ts/
        app.ts
    views/
        welcome.blade.php
````
#
welcome.blade.php

````
<body>
    <div id="app">
        <main-app></main-app>
    </div>
    <script src="{{asset('js/app.js')}}"></script>
</body>
````
All other files were not changed.

If you have any question please ask Stack Overflow, becouse i am not better, than Stack Overflow)

## Good Luck !
