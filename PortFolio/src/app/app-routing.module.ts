import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { InventarioComponent } from './Componentes/Proyectos/inventario/inventario.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'inventary' , component: InventarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
