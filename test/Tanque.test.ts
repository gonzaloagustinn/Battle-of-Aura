import { describe, expect, it } from "vitest";
import { Tanque } from "../src/Tanque";

describe('Tanque', () => { 

    it ('tiene dos puntos de vida', () => {
        const tanque = new Tanque()

        expect (tanque.getVida()).toBe(2)
        expect (tanque.estaVivo()).toBe(true)
    })
})
