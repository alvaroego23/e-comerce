import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import{Observable}from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ServiciosProductService {
  servidor="http://localhost:3000"

  constructor(private servicio:HttpClient) { }
  consultar_Productos():Observable<any>{
    return this.servicio.get(`${this.servidor}/products`);
  }

  consultar_Productos_babys():Observable<any>{
    return this.servicio.get(`${this.servidor}/babys`);
  }
  consultar_Productos_boys():Observable<any>{
    return this.servicio.get(`${this.servidor}/boys`);
  }
  consultar_Productos_girls():Observable<any>{
    return this.servicio.get(`${this.servidor}/girls`);
  }
  consultar_Productos_home():Observable<any>{
    return this.servicio.get(`${this.servidor}/home`);
  }
}
