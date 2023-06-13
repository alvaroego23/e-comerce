import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.scss']
})
export class ResultadoBusquedaComponent  implements OnInit{
  
  constructor(private router:Router){}

  ngOnInit(): void {
    
  }

  products(){
    this.router.navigate(['productos']);
  }

}
