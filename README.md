# Manuapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

# If watcher problems run below
sudo sysctl fs.inotify.max_user_watches=582222 && sudo sysctl -p

## How was the project installed with Nest / Angular Universal
ng new manuapp && cd manuapp && ng add @nest/ng-universal


# In the server folder can add API's
nest new controller ...

# Installation
npm i

# Development (Client-side only rendering)
npm start which will run ng serve.

# Production (also for testing SSR/Pre-rendering locally)
*npm run build:ssr && npm run serve:ssr 

Compiles your application and spins up a Nest server to serve your Universal application on http://localhost:4000.
*npm run build:prerender && npm run serve:prerender

Compiles your application and prerenders your applications files, spinning up a demo http-server so you can view it on http://localhost:8080
Note: To deploy your static site to a static hosting platform you will have to deploy the dist/browser folder, rather than the usual dist