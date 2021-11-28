import { Injectable } from "@angular/core";
import {Actions, ofType, createEffect} from "@ngrx/effects";
import * as usuariosActions from "../actions/usuarios.actions";
import {UsuarioService} from "../../services/usuario.service";
import {catchError, map, mergeMap, tap} from "rxjs/operators";
import {of} from "rxjs";



@Injectable()
export class UsuariosEffects {

  constructor(
    private action$: Actions,
    private usuariosService: UsuarioService

  ) {
  }

  cargarUsuarios$ = createEffect(
    () => this.action$.pipe(
      ofType( usuariosActions.cargarUsuarios ),
      // tap( data => console.log('effect tap ', data)),
      mergeMap(
        () => this.usuariosService.getUsers()
          .pipe(
            // tap( data => console.log('getUsers effect', data))
            map(users => usuariosActions.cargarUsuariosSuccess({ usuarios: users}) ),
            catchError( err => of(usuariosActions.cargarUsuariosError({ payload: err })))
          )
      )

      )
  );

}
