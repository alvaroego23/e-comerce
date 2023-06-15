import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosProductService } from 'src/app/servicios/servicios-product.service';
import { Producto } from '../../interfaces/producto'

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.scss']
})
export class ResultadoBusquedaComponent implements OnInit {

  productos: Array<Producto> = [];
  aleatorio: Array<Number> = [];
  cant_girls: number = 0;
  cant_boys: number = 0;
  cant_home: number = 0;
  cant_babys: number = 0;
  cant_plays: number = 0;





  constructor(private router: Router, private servicio: ServiciosProductService) { }

  ngOnInit(): void {
    //adicionar productos
    this.servicio.consultar_Productos().subscribe(datos => {
      for (let i = 0; i < datos.length; i++) {
        this.productos.push(datos[i]);


      }


      //aleatorio
      for (let i = 0; i < 9; i++) {
        let lol = (Math.floor((Math.random() * (datos.length - 1 + 1)) + 1));
        for (let i = 0; i < this.aleatorio.length; i++) {
          if (lol === this.aleatorio[i]) {
            lol = (Math.floor((Math.random() * (datos.length - 1 + 1)) + 1));
          }
        }
        this.aleatorio.push(lol);
      }

    });
    //cantidad por categoria

    this.servicio.consultar_Productos_home().subscribe(datos => {
      for (let i = 0; i < datos.length; i++) {
        this.cant_home++;
      }
    });
    this.servicio.consultar_Productos_girls().subscribe(datos => {
      for (let i = 0; i < datos.length; i++) {
        this.cant_girls++;
      }
    })
    this.servicio.consultar_Productos_boys().subscribe(datos => {
      for (let i = 0; i < datos.length; i++) {
        this.cant_boys++;
      }
    })
    this.servicio.consultar_Productos_babys().subscribe(datos => {
      for (let i = 0; i < datos.length; i++) {
        this.cant_babys++;
      }
    })



  }



  products() {
    this.router.navigate(['productos']);
  }
  girls() {
    this.router.navigate(['productos/girls']);
  }
  plays() {
    this.router.navigate(['productos/plays']);
  }
  boys() {
    this.router.navigate(['productos/boys']);
  }
  home() {
    this.router.navigate(['productos/home']);
  }
  babys() {
    this.router.navigate(['productos/babys']);
  }

}
