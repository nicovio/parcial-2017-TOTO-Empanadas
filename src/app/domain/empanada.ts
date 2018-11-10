export default class Empanada {
    gusto: string;
    cantidad: number = 0
    valor: number = 20

    constructor(gusto: string) {
        this.gusto = gusto
    }

    total(){
        return this.valor * this.cantidad
    }
}
