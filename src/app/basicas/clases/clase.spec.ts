import { Jugador } from "./clases";


describe('Pruebas de clase', () =>{

    //const jugador = new Jugador();
    let jugador = new Jugador();


    //ciclos de vida de las pruebas ---------------------------

    //despues de todas las pruebas solo se eejecuta una vez
    beforeAll(() => {
        console.log('beforeAll');
    });
    //antes de cada una de las pruebas
    beforeEach(() => {
        console.log('beforeEach');
       // jugador.hp = 100;
       jugador = new Jugador();
    });
    //antes de todas de todas 
    afterAll(() => {
        console.log('afterAll');
    });
    //despues de todas
    afterEach(() => {
        console.log('afterEach');
        jugador.hp = 100;
    });


    it('Debe de retornar 80 de hp, si recibe 20 de da;o', ()=>{
        //ponerlo afuera por que si no se duplica
        //const jugador = new Jugador();
        const resp = jugador.recibeDanio(20);

        expect(resp).toBe(80);
    });

    it('Debe de retornar 50 de hp, si recibe 50 de da;o', ()=>{
        console.log('Esta prueba va a fallar')
       //const jugador = new Jugador();
        const resp = jugador.recibeDanio(50);

        expect(resp).toBe(50);
    });

    it('Debe de retornar 0 de hp, si recibe 100 o mas de da;o', ()=>{

        //const jugador = new Jugador();
         const resp = jugador.recibeDanio(100);
 
         expect(resp).toBe(0);
     });

});