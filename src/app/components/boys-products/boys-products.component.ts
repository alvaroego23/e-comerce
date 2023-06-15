import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ServiciosProductService } from 'src/app/servicios/servicios-product.service';

@Component({
  selector: 'app-boys-products',
  templateUrl: './boys-products.component.html',
  styleUrls: ['./boys-products.component.scss']
})
export class BoysProductsComponent implements OnInit {

   
  productos: Array<Producto> = [];
  constructor(private router: Router, private servicio: ServiciosProductService) { }
  ngOnInit(): void {
    //adicionar productos
    this.servicio.consultar_Productos_boys().subscribe(datos => {
      for (let i = 0; i < datos.length; i++) {
        this.productos.push(datos[i]);

      }
    }) 
  }
  
}
