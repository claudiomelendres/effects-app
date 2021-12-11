import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../models/usuario.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducers";
import {cargarUsuarios} from "../../store/actions";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any;


  // constructor( public usuarioService: UsuarioService ) { }
  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.usuarioService.getUsers().subscribe( (users: any) => {
    //     console.log(users);
    //     this.usuarios = users;
    //   })

    this.store.select('usuarios').subscribe( ({ users, loading, error }) => {
      console.log('selector', users);
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
    })

    console.log('usuarios: ', this.usuarios)
    this.store.dispatch( cargarUsuarios() )
  }

}
