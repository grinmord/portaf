import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/ProductosService';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion = {
    categoria: '',
    desc1: '',
    desc2: '',
    producto: '',
    resumen: '',
    subtitulo1: '',
    subtitulo2: ''
  }; // Inicializa con un objeto vacío
  id: string = ''; // Inicializa con una cadena vacía

  constructor(private route: ActivatedRoute, public productosService: ProductosService) { }

  ngOnInit() {
    this.route.params
    .subscribe((producto: Object) => {
      console.log(producto);
      this.producto = producto as ProductoDescripcion; // Convierte a ProductoDescripcion
      this.id = parametros['id'];
    });
    
    };
  }

