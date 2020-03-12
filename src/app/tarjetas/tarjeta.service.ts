import { Injectable } from '@angular/core';
import { Tarjeta } from './tarjeta';
import { TARJETAS } from './tarjetas.json';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  private urlEndPoint:string = 'https://tarjeta-digital.herokuapp.com/api/v1/tarjeta';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }


  getTarjetas(): Observable<Tarjeta[]>{
    //return of(TARJETAS);
    return this.http.get<Tarjeta[]>(this.urlEndPoint);
  }


  create(tarjeta: Tarjeta) : Observable<Tarjeta>{
    return this.http.post<Tarjeta>(this.urlEndPoint, tarjeta, {headers: this.httpHeaders});
  }


  getTarjeta(id): Observable<Tarjeta>{
    return this.http.get<Tarjeta>(this.urlEndPoint+ '/' +id);
  }
}
