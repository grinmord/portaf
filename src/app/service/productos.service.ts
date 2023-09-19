import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../service/interface Producto';
import { timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando =  true;
  productos: Producto[] = [];

  constructor(private http: HttpClient) { 
    this.cargarProducto();
  }

  private cargarProducto() {
    this.http.get<Producto[]>('https://angular-html-637ef-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe((resp: Producto[]) => {
          console.log(resp);
          this.productos = resp;

          setTimeout(() =>{
            this.cargando = false;

          }, 2000);
        });
  }
}
