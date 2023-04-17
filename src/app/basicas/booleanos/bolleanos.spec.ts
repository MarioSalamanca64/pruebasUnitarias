import { usuarioIngresado } from "./booleanos";

describe('pruebas de Bolleanos', () =>{

    it('Debe de retornar true', ()=> {

        const resp = usuarioIngresado();

        expect(resp).toBe(true);

    });

});