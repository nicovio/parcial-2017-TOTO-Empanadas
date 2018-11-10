import { Component, OnInit } from '@angular/core';
import Empanada from '../domain/empanada';
import { EmpanadasService } from '../servicios/empanadas.service';
import { Router } from "@angular/router"
import Pedido from '../domain/pedido';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  empanadas: Array<Empanada> = []
  textoBusqueda: string = ''

  constructor(private empanadasService: EmpanadasService, private router: Router) {
    this.empanadas = empanadasService.getEmpanadas()
  }

  ngOnInit() {
  }

  subirCantidad(empanada: Empanada) {
    empanada.cantidad = empanada.cantidad + 1
  }

  bajarCantidad(empanada: Empanada) {
    empanada.cantidad = empanada.cantidad - 1
  }

  hayCero(empanada: Empanada) {
    return empanada.cantidad === 0
  }

  finalizarPedido() {
    const pedido = this.empanadasService.crearPedido(this.empanadas)
    this.empanadasService.agregarPedido(pedido)
    this.navegarAFinalizacionPedido(pedido.id)
  }

  navegarAFinalizacionPedido(idPedido: number) {
    this.router.navigate(['pantalla-principal/finalizar-pedido', idPedido]);
  }

}
