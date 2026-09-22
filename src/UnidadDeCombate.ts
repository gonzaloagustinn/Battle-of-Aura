import { Arma } from '../src/Arma'
import { Escudo } from '../src/Escudo'

export class UnidadDeCombate {
    private vida: number
    private arma?: Arma
    escudo: Escudo | undefined

    constructor(vida: number) {
        this.vida = vida

    }
    
    getVida(): number {
        return this.vida
    }

    setVida(vida: number): void {
        this.vida = vida
    }

    recibirDano(dano: number): void {
    const danoReducido = this.escudo?.reducirDaño(dano) ?? dano
    
    this.vida = this.vida - danoReducido
    
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

    getEscudo(): Escudo | undefined {
    return this.escudo
    }

    setEscudo(escudo: Escudo): void {
    this.escudo = escudo
    }
    
}