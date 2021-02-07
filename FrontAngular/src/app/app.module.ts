import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ServiceService } from './empleados.service';
import { ErroresComponent } from './paginas/errores/errores.component';
import { DisplaydatosComponent } from './paginas/errores/display/displaydatos/displaydatos.component';
import { LoginComponent } from './pages/login/login.component';
import { EmpleadoCrudComponent } from './pages/principal/empleado-crud/empleado-crud.component';
import { RegistrarAdminComponent } from './pages/registrar-admin/registrar-admin.component';
import { UsuariosService } from './usuarios.service';


@NgModule({
  declarations: [
    AppComponent,
    ErroresComponent,
    DisplaydatosComponent,
    LoginComponent,
    EmpleadoCrudComponent,
    RegistrarAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
   

  ],
  providers: [ServiceService, UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
