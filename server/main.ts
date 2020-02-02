import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
// import {resolve, basename, } from "path"
// const fs = require('fs-extra')

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  const appPort = process.env.PORT || 4200;
  console.log("********************-OVIVIIIV*-----------------------"+__dirname)
  // let projName = "projectlaa85labec739914b6";
  // const files=[
  //   "1d65bcc.png","9061797.png","d310130.png"
  // ]
  // const sourceFolder = '/nest_angular_app/src/assets/projects_component/'+projName+"/";
  // let destDir='/nest_angular_app/dist/browser/assets/projects_component/'+projName+"/";
  // fs.ensureDir(destDir, err => {
  //   if(err) throw err
  //   for (let file of files){
  //     try {
  //       fs.copySync(sourceFolder+file, destDir+file)
  //       // console.log('success!')
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   }
  //   // dir has now been created, including the directory it is to be placed in
  // })
  
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(appPort);
}
bootstrap();
