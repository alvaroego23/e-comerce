import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResultadoBusquedaComponent } from './components/resultado-busqueda/resultado-busqueda.component';
import { PaginaProductoComponent } from './components/pagina-producto/pagina-producto.component';


import{HttpClientModule}from'@angular/common/http';
import { HomeProductsComponent } from './components/home-products/home-products.component';
import { GirlsProductsComponent } from './components/girls-products/girls-products.component';
import { BoysProductsComponent } from './components/boys-products/boys-products.component';
import { BabysProductsComponent } from './components/babys-products/babys-products.component';
import { PlayProductsComponent } from './components/play-products/play-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResultadoBusquedaComponent,
    PaginaProductoComponent,
    HomeProductsComponent,
    GirlsProductsComponent,
    BoysProductsComponent,
    BabysProductsComponent,
    PlayProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
