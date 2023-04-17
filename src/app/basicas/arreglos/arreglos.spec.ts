
import { obtenerRobots } from "./arreglos";

xdescribe('Pruebas de areglos',()=>{

    it('Debe de retornar al menos 3 robots',()=>{

        const res = obtenerRobots();
        //que se mayor o igual a tres 
        expect(res.length).toBeGreaterThanOrEqual(3);
    });

    it('Debe de existir Megaman y Ultron',()=>{

        const res = obtenerRobots();
        //que se mayor o igual a tres 
        expect(res).toContain('MegaMan');
        expect(res).toContain('Ultron');

    });

});