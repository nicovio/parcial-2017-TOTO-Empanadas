import { Component, OnInit } from '@angular/core';
import { EmpanadasService } from '../servicios/empanadas.service';
import { Router, ActivatedRoute } from '@angular/router';
import Pedido from '../domain/pedido';

@Component({
  selector: 'finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.css']
})
export class FinalizarPedidoComponent implements OnInit {

  pedido: Pedido
  total: number
  errors = []
  idPedido: string

  constructor(private empanadasService: EmpanadasService, private router: Router, private route: ActivatedRoute) {
    try {
      this.initialize()
    } catch (error) {
      this.errors.push(error._body)
    }

  }

  async initialize() {
    this.route.params.subscribe(params => {
      this.idPedido = params['id']
    })

    this.pedido = await this.empanadasService.getPedidoById(this.idPedido)
    if (!this.pedido) {
      this.navegarAHome()
      return
    }

    this.total = this.pedido.empanadas.map(empanada => empanada.total()).reduce((sum, current) => sum + current);

  }

  ngOnInit() {

  }

  navegarAHome() {
    this.router.navigate(['/pantalla-principal/pedido'])
  }


}
