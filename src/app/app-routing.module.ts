import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaProductoComponent } from './components/pagina-producto/pagina-producto.component';
import { ResultadoBusquedaComponent } from './components/resultado-busqueda/resultado-busqueda.component';
import { GirlsProductsComponent } from './components/girls-products/girls-products.component';
import { PlayProductsComponent } from './components/play-products/play-products.component';
import { HomeProductsComponent } from './components/home-products/home-products.component';
import { BoysProductsComponent } from './components/boys-products/boys-products.component';
import { BabysProductsComponent } from './components/babys-products/babys-products.component';

const routes: Routes = [
  {path:'productos/babys', component:BabysProductsComponent},
  {path:'productos/boys', component:BoysProductsComponent},
  {path:'productos/home', component:HomeProductsComponent},
  {path:'productos/plays', component:PlayProductsComponent},
  {path:'productos/girls', component:GirlsProductsComponent},
  {path:'productos', component:PaginaProductoComponent},
  {path:'', component:ResultadoBusquedaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
