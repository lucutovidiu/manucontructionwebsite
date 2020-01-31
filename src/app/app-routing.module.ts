import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from 'page-modules/home-page/home-page.component/home-page.component'
import { NotFoundComponent } from 'shared-components/not-found/not-found.component'
const routes: Routes = [
  {
    path:"",
    component: HomePageComponent,//'page-modules/home-page/home.page.module#HomePageModule'
    pathMatch: "full"
  },
  {
    path:"about",
    loadChildren: 'page-modules/about-page/about.page.module#AboutModule'
  },
  {
    path:"contact",
    loadChildren: 'page-modules/contact-page/contact.page.module#ContactModule'
  },
  {
    path: "project",
    loadChildren: "page-modules/projects-page/projects.page.module#ProjectsModule"
  },
  {
    path:"login",
    loadChildren: "page-modules/login-page/login-page.module#LoginPageModule"
  },

  // {
  //   path: 'about',
  //   loadChildren: () => import('page-modules/about-page/about.page.module').then(m => m.AppServerModule)
  // },
  // {
  //   path: '',
  //   component: HomePageComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'about',
  //   component: AboutPageComponent
  // },
  // {
  //   path: 'galerie',
  //   component: GaleriePageComponent
  // },
  // {
  //   path: 'services',
  //   component: ServicesPageComponent
  // },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
