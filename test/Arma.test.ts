import { describe, expect, it } from 'vitest'
import { Arma } from '../src/Arma'
import { Municion } from '../src/Municion'

describe('Arma', () => {

    it('tiene un daño y una munición', () => {
        const municion = new Municion(3)
        const arma = new Arma(1, municion)

        expect(arma.getDano()).toBe(1)
        expect(arma.getMunicion()).toBe(municion)
    })

    it('dispara y consume munición', () => {
    const municion = new Municion(3)
    const arma = new Arma(1, municion)

    const dano = arma.disparar()

    expect(dano).toBe(1)
    expect(arma.getMunicion().getCantidad()).toBe(2)

    })

    it('no hace daño cuando no tiene munición', () => {
    const municion = new Municion(0)
    const arma = new Arma(1, municion)

    const dano = arma.disparar()

    expect(dano).toBe(0)
})

})