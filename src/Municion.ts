export class Municion {
    private cantidad: number

    constructor(cantidad: number) {
        this.cantidad = cantidad

    }

    getCantidad(): number {
        return this.cantidad
    }

    setCantidad(cantidad: number): void {
        this.cantidad = cantidad

    }

    consumir(): void{
        this.cantidad = Math.max(this.cantidad -1, 0)
    }

}