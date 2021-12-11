import { ActionReducerMap } from '@ngrx/store'
import * as reducers from './reducers';

export interface AppState {
  usuarios: reducers.UsuariosState,
  usuario: reducers.UsuarioState,
  productos: reducers.ProductosState
}

export const appReducers: ActionReducerMap<AppState> = {
  usuarios: reducers.usuariosReducer,
  usuario: reducers.usuarioReducer,
  productos: reducers.productosReducer
}
