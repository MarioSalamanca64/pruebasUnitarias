import { Jugador2 } from './jugador2';


describe('Jugador 2 Emit', () => {

    let jugador:Jugador2;
    //esto se ejecutara antes de todas las pruebas
    beforeEach(() => jugador = new Jugador2());

    it('Debe de emitir un evento cuando recibe da;o', ()=>{

        let nuevoHP = 0;

        jugador.hpCambia.subscribe(hp => {
            nuevoHP = hp;
        });

        jugador.recibeDanio(1000);

        expect(nuevoHP).toBe(0);
    });

    it('Debe de emitir un evento cuando recibe da;o y sobrevivir si es menos de 100', ()=>{

        let nuevoHP = 0;
        //este aun que este antes se espera a que regrese el valor
        jugador.hpCambia.subscribe(hp => nuevoHP = hp);

        jugador.recibeDanio(50);

        expect(nuevoHP).toBe(50);
    });

});