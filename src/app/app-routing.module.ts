import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'integrantes',
    loadChildren: () => import( './integrantes/integrantes.module').then (m => m.IntegrantesModule)
  },
  {
    path: 'auth',
    loadChildren: () => import( './auth/auth.module').then (m => m.AuthModule)
  },
  {
    path: '404',
    component: ErrorPageComponent
  },

  {
    path: '**',
    redirectTo: '404'
    // component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

