import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { PedidoComponent } from './pedido/pedido.component';
import { FinalizarPedidoComponent } from './finalizar-pedido/finalizar-pedido.component';
import { routingComponents, AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuscarPorGustoPipe } from './pipes/buscar-por-gusto.pipe';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PantallaPrincipalComponent,
    PedidoComponent,
    FinalizarPedidoComponent,
    BuscarPorGustoPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
