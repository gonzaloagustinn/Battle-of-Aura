import { describe, expect, it } from 'vitest'
import { UnidadDeCombate } from '../src/UnidadDeCombate'

describe('UnidadDeCombate', () => {
    it('permite recibir daño y consultar si sigue viva', () => {
        const unidad = new UnidadDeCombate(2)

        unidad.recibirDano(1)

        expect(unidad.getVida()).toBe(1)
        expect(unidad.estaVivo()).toBe(true)
    })

    it('muere cuando su vida llega a cero', () => {
        const unidad = new UnidadDeCombate(2)

        unidad.recibirDano(2)

        expect(unidad.getVida()).toBe(0)
        expect(unidad.estaVivo()).toBe(false)
    })
})