import { Injectable } from "@angular/core";
import {Actions, ofType, createEffect} from "@ngrx/effects";
import * as usuariosActions from "../actions";
import {UsuarioService} from "../../services/usuario.service";
import {catchError, map, mergeMap, tap} from "rxjs/operators";
import {of} from "rxjs";



@Injectable()
export class UsuarioEffects {

  constructor(
    private action$: Actions,
    private usuariosService: UsuarioService

  ) {
  }

  cargarUsuario$ = createEffect(
    () => this.action$.pipe(
      ofType( usuariosActions.cargarUsuario ),
      // tap( data => console.log('effect tap ', data)),
      mergeMap(
        (action ) => this.usuariosService.getUserById(action.id)
          .pipe(
            // tap( data => console.log('getUsers effect', data)),
            map(user => usuariosActions.cargarUsuarioSuccess({ usuario: user})),
            catchError( err => of(usuariosActions.cargarUsuarioError({ payload: err })))
          )
      )

    )
  );

}
