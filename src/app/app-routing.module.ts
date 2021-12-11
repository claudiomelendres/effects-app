import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListaComponent} from "./usuarios/lista/lista.component";
import {UsuarioComponent} from "./usuarios/usuario/usuario.component";
import {CatalogoComponent} from "./productos/catalogo/catalogo.component";


const routes: Routes = [
  { path: 'home', component: ListaComponent},
  { path: 'usuario/:id', component: UsuarioComponent },
  { path: 'catalogo', component: CatalogoComponent},
  { path: '**', redirectTo: 'home' },

]

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
