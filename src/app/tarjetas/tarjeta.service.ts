import { Injectable } from '@angular/core';
import { Tarjeta } from './tarjeta';
import { TARJETAS } from './tarjetas.json';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  private urlEndPoint:string = 'http://localhost:8080/api/v1/tarjeta';

  constructor(private http: HttpClient) { }


  getTarjetas(): Observable<Tarjeta[]>{
    //return of(TARJETAS);

    return this.http.get<Tarjeta[]>(this.urlEndPoint);
  }
}
