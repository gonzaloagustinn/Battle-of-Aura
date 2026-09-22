import { describe, expect, it } from 'vitest'
import { UnidadDeCombate } from '../src/UnidadDeCombate'
import { Arma } from '../src/Arma'
import { Municion } from '../src/Municion'
import { Tanque } from '../src/Tanque'
import {Soldado } from '../src/Soldado'
import { Buque } from '../src/Buque'


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

    it('puede tener un arma', () => {
    const municion = new Municion(3)
    const arma = new Arma(1, municion)
    const unidad = new UnidadDeCombate(2)

    unidad.setArma(arma)

    expect(unidad.getArma()).toBe(arma)
    })

    it('puede dispararle a otra unidad', () => {
    const municion = new Municion(3)
    const arma = new Arma(1, municion)

    const atacante = new UnidadDeCombate(2)
    const objetivo = new UnidadDeCombate(2)

    atacante.setArma(arma)
    atacante.dispararA(objetivo)

    expect(objetivo.getVida()).toBe(1)
    })

    it('puede dispararle a otra unidad', () => {
    const municion = new Municion(1)
    const arma = new Arma(1, municion)

    const tanque = new Tanque()
    const buque = new Buque()

    tanque.setArma(arma)
    tanque.dispararA(buque)

    expect(buque.getVida()).toBe(2)
    })
})