import { Component, OnInit } from '@angular/core';
import { EmpanadasService } from '../servicios/empanadas.service';
import { Router, ActivatedRoute } from '@angular/router';
import Empanada from '../domain/empanada';

@Component({
  selector: 'finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.css']
})
export class FinalizarPedidoComponent implements OnInit {

  empanadas: Array<Empanada>
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

    const pedido = await this.empanadasService.getPedidoById(this.idPedido)
    this.empanadas = pedido.empanadas.filter(empanada => empanada.cantidad > 0)

    if (!pedido) {
      this.navegarAHome()
    }



    this.total = this.empanadas.map(empanada => empanada.total()).reduce((sum, current) => sum + current);

  }

  ngOnInit() {

  }

  navegarAHome() {
    this.router.navigate(['/pantalla-principal/pedido'])
  }


}
