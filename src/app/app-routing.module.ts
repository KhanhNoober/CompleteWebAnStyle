import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Layout', loadChildren: () => import('./Modules/layout/layout.module').then(m => m.LayoutModule) },
  { path: 'Header', loadChildren: () => import('./Modules/header/header.module').then(m => m.HeaderModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
