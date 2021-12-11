import {createAction, props} from '@ngrx/store';
import {Producto} from "../../models/producto.model";

export const cargarProductos = createAction('[Productos] Cargar Productos');

export const cargarProductosSuccess = createAction(
  '[Productos] Cargar Productos Success',
  props<{productos: Producto[] }>()
);

export const cargarProductosError = createAction(
  '[Productos] Cargar Productos Error',
  props<{ payload: any }>()
);
