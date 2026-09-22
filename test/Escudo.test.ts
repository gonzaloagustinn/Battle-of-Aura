import { describe, expect, it } from 'vitest'
import { Escudo } from '../src/Escudo'

describe('Escudo', () => {

    it('tiene un porcentaje de protección', () => {
        const escudo = new Escudo(50)

        expect(escudo.getPorcentaje()).toBe(50)
    })

    it('reduce el daño según su porcentaje', () => {
    const escudo = new Escudo(50)

    const dano = escudo.reducirDaño(1)

    expect(dano).toBe(0.5)
    })
    
})
