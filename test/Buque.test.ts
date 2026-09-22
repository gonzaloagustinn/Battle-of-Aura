import { describe, it, expect } from "vitest";
import { Buque } from "../src/Buque";

describe('Buque', () => {

    it('Tiene 3 de vida', () => {
        const buque = new Buque()

        expect(buque.getVida()).toBe(3)
        expect(buque.estaVivo()).toBe(true)
    })
})