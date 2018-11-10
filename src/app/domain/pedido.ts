import Empanada from "./empanada";

export default class Pedido {
    
    id: number
    empanadas: Array<Empanada>

    constructor(empanadas: Array<Empanada>){
        this.empanadas = empanadas
    }
}
