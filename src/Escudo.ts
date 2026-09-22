export class Escudo {
    private porcentaje: number

    constructor(porcentaje: number) {
        this.porcentaje = porcentaje
    }

    getPorcentaje(): number {
        return this.porcentaje
    }

    setPorcentaje(porcentaje: number): void {
        this.porcentaje = porcentaje
    }


    reducirDaño(dano: number): number {
    return dano * (1 - this.porcentaje / 100)
    }


}