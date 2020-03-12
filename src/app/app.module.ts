import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './tarjetas/form.component';

import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: '/tarjetas', pathMatch: 'full'},
  {path: 'tarjetas', component: TarjetasComponent},
  {path: 'form', component: FormComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TarjetasComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
