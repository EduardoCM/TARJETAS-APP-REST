import { Component, OnInit } from '@angular/core';
import { Tarjeta } from './tarjeta';
import { TarjetaService } from './tarjeta.service';
import { Router, ActivatedRoute } from '@angular/router';

import swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

   tarjeta:Tarjeta = new Tarjeta();
  
  constructor(private tarjetaService: TarjetaService,
    private router: Router,
    private activateRoute: ActivatedRoute) {  }

  ngOnInit(): void {
  }


  public create(): void{
    this.tarjetaService.create(this.tarjeta)
    .subscribe( response => {
      this.router.navigate(['/tarjetas'])
      swal.fire('Nueva tarjeta creada', `Tarjeta ${this.tarjeta.numeroTarjeta} creado`, 'success');
    });
  }

  cargarCliente(): void {
    this.activateRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.tarjetaService.getTarjeta(id).subscribe((cliente) => this.tarjeta = this.tarjeta)
      }
    })
  }


}
