import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ServiciosProductService } from 'src/app/servicios/servicios-product.service';

@Component({
  selector: 'app-play-products',
  templateUrl: './play-products.component.html',
  styleUrls: ['./play-products.component.scss']
})
export class PlayProductsComponent {


  productos: Array<Producto> = [];
  constructor(private router: Router, private servicio: ServiciosProductService) { }
  ngOnInit(): void {
    //adicionar productos
    this.servicio.consultar_Productos_babys().subscribe(datos => {
      for (let i = 0; i < datos.length; i++) {
        this.productos.push(datos[i]);

      }
    }) 
  }
}
