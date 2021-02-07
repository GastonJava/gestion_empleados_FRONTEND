import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ServiceService} from './empleados.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Caro Angular Pa';
  
  seMuestra = false;
 
  constructor(private ServiceService: ServiceService){}

  lista:string[]=["hola","que","tal","estas"];

  datosGuardar: any[];
  EmpForm: FormGroup;
  submitted = false;
  EventValue: any = "Save";
  Nombreboton: any = "Mostrar datos";
  

  ngOnInit(): void {

    this.EmpForm = new FormGroup(
      
      {
      empId: new FormControl(0),
      empNombre: new FormControl("", [Validators.required]),
      empContacto: new FormControl("", [ Validators.required ] ),
      empEmail: new FormControl("", [Validators.required]), /* [Validators.compose( [ Validators.required] ) ] */
      empDireccion: new FormControl("", [Validators.required])

      }
    )

    this.getdata();

  
    /* this.seMuestra = false; */
    
  }

  // Mostrar datos de empleados
  isToggle(){
    if(this.seMuestra){
      
      this.Nombreboton = "Mostrar datos";
      this.getdata();
    }else{
      
      this.Nombreboton = "Esconder datos";
    }
   
    this.seMuestra = !this.seMuestra;
    
  }
  
  getdata(){
    this.ServiceService.getData().subscribe(data => {
      console.log("datosGuardados: "+data[1].empNombre);
        this.datosGuardar = data as string[];
    },
    (error: HttpErrorResponse) =>{
      console.log(error.message);
    }
    
    )
  }

  deleteData(id){
    this.ServiceService.deleteData(id).subscribe((data: any[]) => {
      this.datosGuardar = data;
      this.getdata();
    })
  }

  Save() {
    this.submitted = true;
    console.log("seguro es save");

    if(this.EmpForm.invalid){
      console.log("error en el formulario: ");
      return;
    }

    this.ServiceService.postData(this.EmpForm.value).subscribe((data: any) => {
      this.datosGuardar = data;
      console.log("se envio con exito");
      console.log("datos a enviar: "+data);
      console.log("datos de input: "+this.datosGuardar)
      this.limpiar(); 
    })
  }

  Update() {

    this.submitted = true;

    console.log("seguro es update");

    if(this.EmpForm.invalid){
      return;
    }

    this.ServiceService.putData(this.EmpForm.value.empId, this.EmpForm.value).subscribe(data =>{
      this.datosGuardar = data as string[];
      this.limpiar();
    })
  }

  EditData(Data: { empId; empNombre; empContacto; empDireccion; empEmail }){

    console.log("id: "+Data.empId);
    this.EmpForm.controls['empId'].setValue(Data.empId);

    console.log("nombre: "+Data.empNombre);
    this.EmpForm.controls['empNombre'].setValue(Data.empNombre);
    this.EmpForm.controls['empNombre'].setErrors(null);

    this.EmpForm.controls['empContacto'].setValue(Data.empContacto);  
    console.log("Contacto: "+Data.empContacto);  
  

    /* console.log("email: "+Data.empMail);  */
    this.EmpForm.controls['empEmail'].setValue(Data.empEmail); 
    
    
    console.log("Direccion: "+Data.empDireccion);
    this.EmpForm.controls['empDireccion'].setValue(Data.empDireccion); 

 
    this.EventValue = 'Update';
  }

  limpiar() {
    this.getdata();
    this.EmpForm.reset();
    this.EventValue = "Save";
    this.submitted = false;
  }
}