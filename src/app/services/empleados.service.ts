import {HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Empleados } from '../models/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  readonly url = 'http://localhost:3000/api/empleados';

  empleado: Empleados;

  empleados: Empleados[];

  constructor(private httpClient: HttpClient) {
    this.empleado = new Empleados();
    this.empleados = new Array();
  }

  getEmpleados(){
    return this.httpClient.get(this.url);
  }
  addEmpleado(empleado: Empleados){
    return this.httpClient.post(this.url, empleado);
  }
  updateEmpleado(empleado: Empleados){
    return this.httpClient.put(this.url + '/' + empleado._id, empleado);
  }
  deleteEmpleado(_id:String){
    return this.httpClient.delete(this.url + '/' +_id);
  }

}

