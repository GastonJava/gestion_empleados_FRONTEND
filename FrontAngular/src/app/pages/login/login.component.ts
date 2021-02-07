import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService} from 'src/app/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice: UsuariosService) { } // UsuarioService sera el encargado de distribuir a login y a crear y demas componentes

  //variables
  loginUser: FormGroup;
  submittedLogin: false;
  datosGuardar: any[];
  invalidLogin: Boolean;

  
  //en el on init iniciara lo que tenga dentro al cargarse la pagina, en este caso el formulario se cargara
  ngOnInit(): void {
  
    this.loginUser = new FormGroup(
      {
        idEmpLogin: new FormControl(0),
        emailEmp: new FormControl("", [Validators.required]),
        passEmp:  new FormControl("", [Validators.required]),
        rolEmp:   new FormControl("", [Validators.required]),
      }
    );

    console.warn(this.loginUser.value);

  }

  enviar(){
    this.loginservice.postdata(this.loginUser.value)
    .subscribe(response => {

      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      // this.router.navigate(["/"]);
    }, err => {
      console.log(err);
      this.invalidLogin = true;
    });

    console.log("HOLA SI FUNCIONA EL ENVIAR");
    console.log(this.loginUser.value);
    
  }

  isUserAuthenticated(){
    const token: string = localStorage.getItem("jwt");
    if(token){
      return true;
    }else{
      return false;
    }
  }

  if(isUserAuthenticated){
    
  }

  logout(){
    localStorage.removeItem("jwt");
  }


}