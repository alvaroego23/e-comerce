import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ServiciosProductService } from 'src/app/servicios/servicios-product.service';

@Component({
  selector: 'app-pagina-producto',
  templateUrl: './pagina-producto.component.html',
  styleUrls: ['./pagina-producto.component.scss']
})
export class PaginaProductoComponent implements OnInit {
  productos!:Producto[];
  nombre:string="";
  constructor(private router: Router,private route: ActivatedRoute, private servicio: ServiciosProductService) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      if(params.has("id")){
        this.servicio.obtener_producto_id(params.get("id")!).subscribe(params => this.productos = params);
      }
    })
    console.log(this.productos);
    for(let i =0 ; i> this.productos.length; i++){
     this.nombre = this.productos[i].nombre;

    }
  }


}
