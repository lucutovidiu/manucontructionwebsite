const { LiveReloadCompiler } = require('@nestjs/ng-universal');

const compiler = new LiveReloadCompiler({
  projectName: 'manuapp',
  tsServerConfigFile: 'server/tsconfig.json',
  watchDir: 'dist',
  serverBundlePath: 'dist/server/main.js',
  serverFilePath: 'dist/server-app/server/main',
  // mainBundlePath: 'dist/browser/main.js',
  // indexFilePath: 'dist/browser/index.html',
  outputDir: 'dist',
  watchSsr: true
});
compiler.run();
