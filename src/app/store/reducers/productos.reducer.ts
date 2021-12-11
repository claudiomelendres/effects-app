import { createReducer, on } from '@ngrx/store';
import { Producto } from 'src/app/models/producto.model';
import { cargarProductos, cargarProductosSuccess, cargarProductosError } from '../actions';

export interface ProductosState {
  products: Producto[],
  loaded: boolean,
  loading: boolean,
  error: any
}

export const productosInitialState: ProductosState = {
  products: [],
  loaded: false,
  loading: false,
  error: null
}

const _productosReducer = createReducer(productosInitialState,
  on(cargarProductos, state => ({...state, loading:true })),
  on(cargarProductosSuccess, (state,{ productos }) => ({
    ...state,
    loading:false,
    loaded: true,
    products: [ ...productos ]
  })),

  on(cargarProductosError, (state,{ payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  })),

);

// @ts-ignore
export function productosReducer(state, action) {
  return _productosReducer(state, action);
}
