import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoComponent } from './pedido/pedido.component';
import { FinalizarPedidoComponent } from './finalizar-pedido/finalizar-pedido.component';


export const routes: Routes = [
  { path: '', redirectTo: 'pantalla-principal/pedido', pathMatch: 'full' },

  { path: 'pantalla-principal/pedido', component: PedidoComponent },

  { path: 'pantalla-principal/finalizar-pedido/:id', component: FinalizarPedidoComponent },

  // { path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PedidoComponent, FinalizarPedidoComponent];
