import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "clientes",
        canActivate: [AuthGuard],
        loadChildren: () => import('./../modules/clientes/clientes.module').then(m => m.ClientesModule)
      },
    ]
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
