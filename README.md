# Notes-Reminder

***********************************
# Guía de Instalacion:


### Instalación de Módulos de Node

- Handlebars es un montor de plantillas para nuestro servidor.

- Express-session crea sesiones durante el servidor.

- Method-override para extender la funcionalidad de los formularios.

- Mongoose es un modulo que permite conectarme a mongoDB

- Passport para poder autenticar a mi usuario

- Convertir un String en un Hash, (Cifrar contraseñas)

- Connect-flash Modulo para enviar mensajes al usuario (min 4 digitos etc)

```bash

npm i express express-handlebars express-session method-override mongoose passport passport-local bcryptjs connect-flash

```

- Modulos solo de desarrollo


```bash

npm i nodemon
```
**************************************************************************************

### Información sobre carpetas

- config

- helpers
- models

Es donde se crean modelos de datos para la base de datos. Esta sera llamada desde los metodos post que quieran almacenar información

- public

Aqui se crean los Static Files o archivos estáticos los cuales no van a ser modificados

- routes

Donde se crean las rutas y se hacen los metodos del protocolo http

- views

Aquí se crea el frontend con subcarpetas como: layouts partials users




**************************************************************************************

Apuntes: ctrl + k + f