import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {catchError, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url = 'https://fakestoreapi.com';

  constructor( private http: HttpClient) { }

  getProductos() {
    return this.http.get(`${this.url}/products`)
      .pipe(
        map( (resp: any) => resp)
      )
  }

  getProducto(id: string) {
    return this.http.get(`${this.url}/products/${ id }`)
      .pipe(
        map( (resp: any) => resp['data'])
      )
  }
}
