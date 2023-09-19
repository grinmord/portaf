import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/ProductosService';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor( public productosService: ProductosService ) { }

  ngOnInit() {
  }

}
