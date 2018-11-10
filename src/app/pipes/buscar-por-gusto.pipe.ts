import { Pipe, PipeTransform } from '@angular/core';
import Empanada from '../domain/empanada';

@Pipe({
  name: 'buscarPorGusto'
})
export class BuscarPorGustoPipe implements PipeTransform {

  transform(empanadas: Array<Empanada>, textoBusqueda?: string): any {
    return empanadas.filter(empanada => empanada.gusto.toLocaleLowerCase().includes(textoBusqueda.toLocaleLowerCase()));
  }

}
