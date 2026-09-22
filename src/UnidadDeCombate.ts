import { Arma } from '../src/Arma'

export class UnidadDeCombate {
    private vida: number
    private arma?: Arma

    constructor(vida: number) {
        this.vida = vida

    }
    
    getVida(): number {
        return this.vida
    }

    setVida(vida: number): void {
        this.vida = vida
    }

    recibirDano(dano: number): void{
        this.vida = this.vida - dano
    }
    
    estaVivo(): boolean {
        return this.vida > 0
    }
    getArma(): Arma | undefined {
    return this.arma
    }

    setArma(arma: Arma): void {
    this.arma = arma
    }

    dispararA(objetivo: UnidadDeCombate): void {
    const dano = this.arma?.disparar() ?? 0
    objetivo.recibirDano(dano)
    }
    
}