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

})