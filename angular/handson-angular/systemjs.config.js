/**
 * System configuration
 */

  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'dist/app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      'core-js': 'npm:core-js',
      'zone.js': 'npm:zone.js',
      'rxjs': 'npm:rxjs',
      'rxjs-compat':'npm:rxjs-compat',
      'tslib': 'npm:tslib/tslib.js',

      // other libraries
      'rxjs':                      'npm:rxjs',
      'ng2-file-upload':           'npm:ng2-file-upload',
      'cloudinary-core':           'npm:cloudinary-core',
      '@cloudinary/angular':       'npm:@cloudinary/angular',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      'core-js': {},
      'zone.js': {},
      rxjs: {
        main: 'index.js', 
        defaultExtension: 'js'
      },
      'rxjs/operators': {
         main: 'index.js', 
         defaultExtension: 'js'
      },
      'ng2-file-upload': { 
        main: 'ng2-file-upload.js', 
        defaultExtension: 'js' 
      },
      'cloudinary-core': { 
        main: 'cloudinary-core-shrinkwrap.js', 
        defaultExtension: 'js' 
      },
      '@cloudinary/angular': { 
        main: 'index.js', 
        defaultExtension: 'js' 
      },
      'rxjs/internal-compatibility': {'main': 'index.js','defaultExtension': 'js'},
      'rxjs/testing': {'main': 'index.js','defaultExtension': 'js'},
      'rxjs/ajax': {'main': 'index.js','defaultExtension': 'js'},
      'rxjs/webSocket': {'main': 'index.js','defaultExtension': 'js'},
      'rxjs-compat': {'main': 'index.js','defaultExtension': 'js'}
    }
  });
