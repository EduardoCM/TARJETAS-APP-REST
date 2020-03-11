import { Component, OnInit } from '@angular/core';
import { Tarjeta } from './tarjeta';
import { TarjetaService } from './tarjeta.service';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent implements OnInit {

  

  tarjetas: Tarjeta[];

  constructor(private tarjetaService: TarjetaService) { }

  ngOnInit(): void {
    this.tarjetaService.getTarjetas().subscribe(
      tarjetas => this.tarjetas = tarjetas
    );
  }


}
