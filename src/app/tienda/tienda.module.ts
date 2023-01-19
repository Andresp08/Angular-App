import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoComponent } from './pages/producto/producto.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { VerProductoComponent } from './pages/ver-producto/ver-producto.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    ProductoComponent,
    ClientesComponent,
    VerProductoComponent,
    NotFoundComponent,
  ],
  exports: [
    ProductoComponent,
    ClientesComponent,
    VerProductoComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class TiendaModule { }
