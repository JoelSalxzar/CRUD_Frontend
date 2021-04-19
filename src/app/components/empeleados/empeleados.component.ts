import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpleadosService } from '../../services/empleados.service';
import { Empleados } from '../../models/empleados';
declare var M:any;

@Component({
  selector: 'app-empeleados',
  templateUrl: './empeleados.component.html',
  styleUrls: ['./empeleados.component.css']
})
export class EmpeleadosComponent implements OnInit {

  constructor(public empeleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.getEmpleados();
  }
  addEmpleado(form: NgForm) {
    //console.log(form.value);

    if (form.value._id){
      this.empeleadosService.updateEmpleado(form.value).subscribe(response =>{
        this.resetForm(form);
          M.toast({html: 'empleado actualizado correctamente'})
          this.getEmpleados();
      })
    } else{
    this.empeleadosService.addEmpleado(form.value)
        .subscribe(response => {
         // console.log(response);
          this.resetForm(form);
          M.toast({html: 'empleado guardado correctamente'})
          this.getEmpleados();
        })
      }
  };
  getEmpleados(){
    this.empeleadosService.getEmpleados()
                          .subscribe(response =>{
                            this.empeleadosService.empleados = response as Empleados [];
                            console.log(response);
                          })
  }
  editarEmpleado(empleado:Empleados){
    this.empeleadosService.empleado = empleado;
  } 
  eliminarEmpleado(_id:String){
    if (confirm('Estas seguro de eliminar empleado')){
    this.empeleadosService.deleteEmpleado(_id).subscribe(response =>{
      console.log(response);
      M.toast({html: 'empleado guardado correctamente'})
      this.getEmpleados();
     })
   }
  }
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.empeleadosService.empleado = new Empleados();
    }
  }
}
