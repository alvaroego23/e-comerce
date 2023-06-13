import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaProductoComponent } from './components/pagina-producto/pagina-producto.component';
import { ResultadoBusquedaComponent } from './components/resultado-busqueda/resultado-busqueda.component';

const routes: Routes = [
  {path:'productos', component:PaginaProductoComponent},
  {path:'', component:ResultadoBusquedaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
