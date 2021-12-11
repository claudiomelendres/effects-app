import { Injectable } from "@angular/core";
import {Actions, ofType, createEffect} from "@ngrx/effects";
import * as productosActions from "../actions";
import {ProductoService} from "../../services/producto.service";
import {catchError, map, mergeMap, tap} from "rxjs/operators";
import {of} from "rxjs";



@Injectable()
export class ProductosEffects {

  constructor(
    private action$: Actions,
    private productosService: ProductoService

  ) {
  }

  cargarProductos$ = createEffect(
    () => this.action$.pipe(
      ofType( productosActions.cargarProductos ),
      // tap( data => console.log('effect tap ', data)),
      mergeMap(
        () => this.productosService.getProductos()
          .pipe(
            // tap( data => console.log('getProducts effect', data))
            map(products => productosActions.cargarProductosSuccess({ productos: products}) ),
            catchError( err => of(productosActions.cargarProductosError({ payload: err })))
          )
      )

    )
  );

}
