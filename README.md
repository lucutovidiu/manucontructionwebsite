# GIT remote
git remote add "origin" "and below url"
git@github-ovidiu:lucutovidiu/manucontructionwebsite.git
https://github.com/lucutovidiu/manucontructionwebsite.git

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
npm start which will run: npm run start:dev.

# Server Development
* ng run serve
- Not Working but for reference- in case of error: Internal watch failed: ENOSPC: System limit for number of file watchers reached:
    * echo fs.inotify.max_user_watches=100000 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
    That will persist only until you reboot, though. To make this permanent, add a file named /etc/sysctl.d/10-user-watches.conf with the following contents:
    - fs.inotify.max_user_watches = 100000
    After making the above (or any other) change, you can reload the settings from all sysctl configuration files in /etc with sudo sysctl -p.

# Production (also for testing SSR/Pre-rendering locally)
*npm run build:ssr && npm run serve:ssr 

Compiles your application and spins up a Nest server to serve your Universal application on http://localhost:4000.
*npm run build:prerender && npm run serve:prerender

Compiles your application and prerenders your applications files, spinning up a demo http-server so you can view it on http://localhost:8080
Note: To deploy your static site to a static hosting platform you will have to deploy the dist/browser folder, rather than the usual dist

# For heroku
1. Requires script below:
npm run heroku-postbuild
"heroku-postbuild": "npm run build:ssr"
2. Start script was modified as below: 
npm run start
"start": "npm run serve:ssr"
both above are required by heroku
