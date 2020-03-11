import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';

import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http'


const routes: Routes = [
  {path: '', redirectTo: '/tarjetas', pathMatch: 'full'},
  {path: 'tarjetas', component: TarjetasComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TarjetasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
