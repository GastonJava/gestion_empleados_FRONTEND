import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  
  invalidLogin: boolean;

  constructor(private router: Router, private http: HttpClient) {}

  postdata(formData){
    return this.http.post("https://localhost:44330/api/Empleado/login", formData);
    
  } 

  crearLogin(datosLogin){
    return this.http.post("https://localhost:44330/api/Empleado", datosLogin);
    
  }


  
}