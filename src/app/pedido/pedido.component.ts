import { Component, OnInit } from '@angular/core';
import Empanada from '../domain/empanada';
import { EmpanadasService } from '../servicios/empanadas.service';
import { Router } from "@angular/router"

@Component({
  selector: 'pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  empanadas: Array<Empanada> = []
  textoBusqueda: string = ''
  errorMenosDe4Empanadas = false

  constructor(private empanadasService: EmpanadasService, private router: Router) {
    this.initialize()
  }

  ngOnInit() {
  }

  async initialize() {
    this.empanadas = await this.empanadasService.getEmpanadas()
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

  async finalizarPedido() {
    if (this.cantidadDeEmpanadas() >= 4) {
      const pedido = await this.empanadasService.crearPedido(this.empanadas)
      await this.empanadasService.agregarPedido(pedido)
      this.navegarAFinalizacionPedido(pedido.id)
    }
    else {
      this.errorMenosDe4Empanadas = true
    }
  }

  cantidadDeEmpanadas() {
    const cantidadTotal = this.empanadas.map(empanada => empanada.cantidad).reduce((sum, current) => sum + current);
    return cantidadTotal


  }

  resetearTextoBusqueda(){
    this.textoBusqueda=''
  }

  navegarAFinalizacionPedido(idPedido: number) {
    this.router.navigate(['pantalla-principal/finalizar-pedido', idPedido]);
  }

}
