import { Injectable } from '@angular/core';
import Empanada from '../domain/empanada';
import Pedido from '../domain/pedido';

@Injectable({
  providedIn: 'root'
})
export class EmpanadasService {

  pedidos: Array<Pedido> = []

  idAAsignar = 0

  async getEmpanadas() {
    return [
      new Empanada('CARNE LA REINA'), new Empanada('QUESO Y CEBOLLA'), new Empanada('ROQUEFORT Y APIO'), new Empanada('HUMITA'), new Empanada('ATUN'), new Empanada('CAPRESE')
    ]
  }

  async crearPedido(empanadas: Array<Empanada>) {
    const pedido = new Pedido(empanadas)
    this.asignarId(pedido)
    return pedido
  }


  async agregarPedido(pedido: Pedido) {
    this.pedidos.push(pedido)
  }

  async asignarId(pedido: Pedido) {
    pedido.id = this.idAAsignar
    this.idAAsignar++
  }

  async getPedidoById(idPedido: string) {
    const idNumber = parseInt(idPedido)
    return this.pedidos.find(pedido => pedido.id === idNumber)
  }

}
