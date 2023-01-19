import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductoComponent } from './tienda/pages/producto/producto.component';
import { ClientesComponent } from "./tienda/pages/clientes/clientes.component";
import { VerProductoComponent } from './tienda/pages/ver-producto/ver-producto.component';
import { NotFoundComponent } from './tienda/pages/not-found/not-found.component';


const routes:Routes = [
    {
        path: '',
        component: ProductoComponent,
        pathMatch: "full"
    },
    {
        path: 'clientes',
        component: ClientesComponent
    },
    {
        path: 'producto/:id',
        component: VerProductoComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{}