import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmpleadoCrudComponent } from './pages/principal/empleado-crud/empleado-crud.component';
import { RegistrarAdminComponent } from './pages/registrar-admin/registrar-admin.component';

const routes: Routes = 
[
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'emp', 
    component: EmpleadoCrudComponent,
  },
  {
    path: 'registrar',
    component: RegistrarAdminComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }