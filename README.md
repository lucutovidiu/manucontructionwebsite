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

# Server Development - locally
- Not Working but for reference- in case of error: Internal watch failed: ENOSPC: System limit for number of file watchers reached:
    * echo fs.inotify.max_user_watches=100000 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
    That will persist only until you reboot, though. To make this permanent, add a file named /etc/sysctl.d/10-user-watches.conf with the following contents:
    - fs.inotify.max_user_watches = 100000
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

# JWT TOKEN Info
https://www.npmjs.com/package/jsonwebtoken


# Image conversion and resizing
https://www.npmjs.com/package/jimp
Methods
Once the promise is fulfilled, the following methods can be called on the image:

/* Resize */
image.contain( w, h[, alignBits || mode, mode] );    // scale the image to the given width and height, some parts of the image may be letter boxed
image.cover( w, h[, alignBits || mode, mode] );      // scale the image to the given width and height, some parts of the image may be clipped
image.resize( w, h[, mode] );     // resize the image. Jimp.AUTO can be passed as one of the values.
image.scale( f[, mode] );         // scale the image by the factor f
image.scaleToFit( w, h[, mode] ); // scale the image to the largest size that fits inside the given width and height
 
// An optional resize mode can be passed with all resize methods.
 
/* Crop */
image.autocrop([tolerance, frames]); // automatically crop same-color borders from image (if any), frames must be a Boolean
image.autocrop(options);          // automatically crop same-color borders from image (if any), options may contain tolerance, cropOnlyFrames, cropSymmetric, leaveBorder
image.crop( x, y, w, h );         // crop to the given region
 
/* Composing */
image.blit( src, x, y, [srcx, srcy, srcw, srch] );
                                  // blit the image with another Jimp image at x, y, optionally cropped.
image.composite( src, x, y, [{ mode, opacitySource, opacityDest }] );     // composites another Jimp image over this image at x, y
image.mask( src, x, y );          // masks the image with another Jimp image at x, y using average pixel value
image.convolute( kernel );        // applies a convolution kernel matrix to the image or a region
 
/* Flip and rotate */
image.flip( horz, vert );         // flip the image horizontally or vertically
image.mirror( horz, vert );       // an alias for flip
image.rotate( deg[, mode] );      // rotate the image clockwise by a number of degrees. Optionally, a resize mode can be passed. If `false` is passed as the second parameter, the image width and height will not be resized.
 
/* Colour */
image.brightness( val );          // adjust the brighness by a value -1 to +1
image.contrast( val );            // adjust the contrast by a value -1 to +1
image.dither565();                // ordered dithering of the image and reduce color space to 16-bits (RGB565)
image.greyscale();                // remove colour from the image
image.invert();                   // invert the image colours
image.normalize();                // normalize the channels in an image
 
/* Alpha channel */
image.hasAlpha();                     // determines if an image contains opaque pixels
image.fade( f );                  // an alternative to opacity, fades the image by a factor 0 - 1. 0 will haven no effect. 1 will turn the image
image.opacity( f );               // multiply the alpha channel by each pixel by the factor f, 0 - 1
image.opaque();                   // set the alpha channel on every pixel to fully opaque
image.background( hex );          // set the default new pixel colour (e.g. 0xFFFFFFFF or 0x00000000) for by some operations (e.g. image.contain and
 
/* Blurs */
image.gaussian( r );              // Gaussian blur the image by r pixels (VERY slow)
image.blur( r );                  // fast blur the image by r pixels
 
/* Effects */
image.posterize( n );             // apply a posterization effect with n level
image.sepia();                    // apply a sepia wash to the image
image.pixelate( size[, x, y, w, h ]);  // apply a pixelation effect to the image or a region
 
/* 3D */
image.displace( map, offset );    // displaces the image pixels based on the p
image.resize(250, 250); // resize the image to 250 x 250
image.resize(Jimp.AUTO, 250); // resize the height to 250 and scale the width accordingly
image.resize(250, Jimp.AUTO); // resize the width to 250 and scale the height accordingly

# When making httpRequests ca use below
this.http.get<HttpResponse<object>>(url, {observe: 'response'})
        .pipe(
            tap((resp: any) => {
                const token = resp.headers.get('Authorization-BC');
                this.setAuthorizationToken(token);
            }))
        .subscribe(
            () => {
                resolve(true);
            },
            (error: HttpErrorResponse) => {
                resolve(error);
            }
        );

# NgInx restart server
into docker -> cd /etc/init.d/ -> ./nginx reload