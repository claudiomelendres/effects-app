import { Component, OnInit } from '@angular/core';
import {AppState} from "../../store/app.reducers";
import {Store} from "@ngrx/store";
import {Producto} from "../../models/producto.model";
import {cargarProductos} from "../../store/actions";
import {ProductoService} from "../../services/producto.service";

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})

export class CatalogoComponent implements OnInit {

  productos: Producto[] = [];
  loading: boolean = false;
  error: any;

  constructor( private store: Store<AppState>) { }
  // constructor(public productoService: ProductoService) {


  ngOnInit(): void {

    // this.productoService.getProductos().subscribe((products: any) =>{
    //   console.log('productos',  products);
    //   this.productos = products;
    // })


    this.store.select('productos').subscribe(({products,loading,error}) => {
      // console.log('selector', products)
      this.productos = products;
      this.loading = loading;
      this.error = error;
    })

    this.store.dispatch(cargarProductos())
  }

}
