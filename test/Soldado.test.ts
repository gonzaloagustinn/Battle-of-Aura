import { describe, expect, it } from 'vitest'
import { Soldado } from '../src/Soldado'

describe('Soldado', () => {
  it('permite consultar y modificar la vida', () => {

    const soldado = new Soldado()

    soldado.setVida(5)

    expect(soldado.getVida()).toBe(5)

  })

      it('muere al recibir un disparo', () => {
        const soldado = new Soldado()

        soldado.setVida(5)

        expect(soldado.getVida()).toBe(5)
    })
})