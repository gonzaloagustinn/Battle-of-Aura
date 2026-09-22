import { Municion } from "./Municion";

export class Arma{
    private dano: number
    private municion: Municion

    constructor(dano: number, municion: Municion) {
        this.dano = dano
        this.municion = municion

    }

    getDano(): number {
        return this.dano

    }

    setDano(dano: number): void {
        this.dano = dano
    }

    getMunicion(): Municion{
        return this.municion

    }

    setMunicion(municion: Municion): void {
    this.municion = municion
    }


}