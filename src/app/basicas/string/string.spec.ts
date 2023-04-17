
//describe('Pruebas de String');
//it('Debe regresar un string');

import { mensaje } from "./string";

describe('Preubas de strings', () =>{
    //el primer parametro es un texto
    it('Debe de regresar un string', ()=>{

       const resp =  mensaje('Mario');
        //expec espera que la respuesta sea de tal forma
        //toBE si es un string
       expect( typeof resp).toBe('string');

    })

    //el primer parametro es un texto
    it('Debe de retornar un saludo con el nombnre enviado', ()=>{
        const nombre = 'Juan';
        //que en la funcion nombre se mande el nombre
        const resp =  mensaje(nombre);
        expect(resp).toContain(nombre);
    
     })

});