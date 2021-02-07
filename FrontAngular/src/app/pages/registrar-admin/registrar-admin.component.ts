import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/usuarios.service';

@Component({
  selector: 'app-registrar-admin',
  templateUrl: './registrar-admin.component.html',
  styleUrls: ['./registrar-admin.component.css']
})
export class RegistrarAdminComponent implements OnInit {

  //variables
  registrar: FormGroup;
  submittedLogin: false;
  datosGuardar: any[];


  constructor(private registrarservice: UsuariosService) { }

  ngOnInit(): void {
  
    this.registrar = new FormGroup(
      {
        idEmpLogin: new FormControl(0),
        emailEmp: new FormControl("", [Validators.required]),
        passEmp:  new FormControl("", [Validators.required]),
        rolEmp:   new FormControl("", [Validators.required]),
      }
    );

    console.warn(this.registrar.value);

  }

  crearLoginUser(){

    if(this.registrar.invalid){
        return;
    }

    this.registrarservice.crearLogin(this.registrar.value).subscribe((data: any) =>{
      console.log("se envio con exito");
      console.log("datos a enviar: "+data);
      console.log("datos de input: "+this.datosGuardar)
      this.datosGuardar = data;
    })

  }

}