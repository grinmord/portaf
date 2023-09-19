import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina = {};
  // cargada: false

  equipo:any [] = [];
  constructor(private http:HttpClient){
    
     this.cargarInfo();

  }
    private cargarInfo (){
    //leer json
    this.http.get('assets/data/datapagina.json')
        .subscribe((resp: InfoPagina)=> {

          // this.cargada= true;
          this.info = resp
          console.log( resp)
   })
}
  private cargarEquipo (){
    
  }
}

