export class UnidadDeCombate {
    private vida: number

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
    
}