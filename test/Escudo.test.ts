import { describe, expect, it } from 'vitest'
import { Escudo } from '../src/Escudo'

describe('Escudo', () => {

    it('tiene un porcentaje de protección', () => {
        const escudo = new Escudo(50)

        expect(escudo.getPorcentaje()).toBe(50)
    })

})