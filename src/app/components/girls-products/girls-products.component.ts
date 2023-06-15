import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ServiciosProductService } from 'src/app/servicios/servicios-product.service';

@Component({
  selector: 'app-girls-products',
  templateUrl: './girls-products.component.html',
  styleUrls: ['./girls-products.component.scss']
})
export class GirlsProductsComponent implements OnInit {

  productos: Array<Producto> = [];
  constructor(private router: Router, private servicio: ServiciosProductService) { }
  ngOnInit(): void {
    //adicionar productos
    this.servicio.consultar_Productos_girls().subscribe(datos => {
      for (let i = 0; i < datos.length; i++) {
        this.productos.push(datos[i]);

      }
    }) 
  }
}
