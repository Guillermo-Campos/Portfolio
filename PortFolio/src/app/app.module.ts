import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/home/home.component';
import { InventarioComponent } from './Componentes/Proyectos/inventario/inventario.component';
import { YupieComponent } from './Componentes/Proyectos/yupie/yupie.component';

import { MarcasComponent } from './Componentes/Proyectos/inventario/marcas/marcas.component';
import { ModalMarcasComponent } from './Componentes/Proyectos/inventario/modal-marcas/modal-marcas.component';
import { ProductosComponent } from './Componentes/Proyectos/inventario/productos/productos.component';
import { VentasComponent } from './Componentes/Proyectos/inventario/ventas/ventas.component';
import { TecnologiasComponent } from './Componentes/tecnologias/tecnologias.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InventarioComponent,
    YupieComponent,
    MarcasComponent,
    ModalMarcasComponent,
    ProductosComponent,
    VentasComponent,
    TecnologiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
