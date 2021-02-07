import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { DatabaseService } from './database.service';


@Injectable({
  providedIn: 'root'
})

/* const Httpheaders = new HttpHeaders();
Httpheaders.set('Content-Type', 'application/json; charset=utf-8'); */



export class ServiceService {

  constructor(private http: HttpClient) { }

  

  readonly root = 'https://localhost:44330/api/';

  /* httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json; charset=utf-8',
      
    })
  } */

 /*  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  }; */
 

  // data
  getData(){
    console.log("hola soy get data desde services");
    return this.http.get('https://localhost:44330/api/testEmpleadoModels');
  }

  //post
  postData(formData){
    return this.http.post('https://localhost:44330/api/testEmpleadoModels', formData, {
      /* headers: new HttpHeaders({'Content-Type' : 'application/json; charset=utf-8'}) */
    });
  }

  // put
  putData(id: string, formData: any){
    return this.http.put('https://localhost:44330/api/testEmpleadoModels/'+id, formData);
  }

  //delete
  deleteData(id: string){
    return this.http.delete('https://localhost:44330/api/testEmpleadoModels/'+id);
  }
}