import { describe, it, expect } from "vitest";
import { Municion } from "../src/Municion"

describe('Municion', () => {
    it('consumir municion', () => {
        const municion = new Municion(3)

        municion.consumir()

        expect(municion.getCantidad()).toBe(2)
    })
})