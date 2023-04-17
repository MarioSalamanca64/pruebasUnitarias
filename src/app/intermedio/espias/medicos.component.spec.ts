import { empty, from,throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null!);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('Init: Debe de cargar los medicos', () => {

        const medico = ['medico1','medico2','medico3']

        //hacer peticiones falsas 
        spyOn(servicio,'getMedicos').and.callFake(() => {
            return from(medico);
        });

        componente.ngOnInit();
        
        expect(componente.medicos.length).toBeGreaterThan(0);
    });

    it('Debe de llamar al servidor para agregar un medico',() =>{

        const espia = spyOn(servicio, 'agregarMedico').and.callFake( medico => {
            return empty();
        });

        componente.agregarMedico();
        //si es llamado 
        expect(espia).toHaveBeenCalled()
    })

    it('Debe de agregar un nuevo medico al arreglo de medico', () =>{

        const medico = {id:1, nombre: 'juan'};
        // debe regersar un valor
        spyOn(servicio,'agregarMedico').and.returnValue(
            //en este caso tiene que ser un obserbable
             from([medico])
        );

        componente.agregarMedico();
        //le decimos que este medico que agregamos en verdad esta en el array de medicos nuevos 
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    })

    it('Si falla la adicion, la propiedad mesnajeError, debe ser igual al error del servicio',() => {

        const miError = 'No se puedo agregar el medico';
        //vemos lo que regersa el error de un obserbable
        spyOn(servicio, 'agregarMedico').and.returnValue(
            throwError(() => miError)
        );

        componente.agregarMedico();

        expect(componente.mensajeError).toBe(miError);

    })

    it('Debe de llamar al servidor para borrar un medico', () =>{

        //simular el click ya que tenem,so que hacer click manual mente
        spyOn(window,'confirm').and.returnValue(true);

        //solo nos interesa saber que esta funcion fue llamada
        const espia  = spyOn(servicio,'borrarMedico').and.returnValue(empty());

        componente.borrarMedico('1');

        expect(espia).toHaveBeenCalledOnceWith('1');

    });

    it('NO debe de llamar al servidor para borrar un medico', () =>{

        //simular el click ya que tenem,so que hacer click manual mente // si mandamos true fallara la prueva ya que por el not es no esperamos que sea verdadero
        spyOn(window,'confirm').and.returnValue(false);

        //solo nos interesa saber que esta funcion fue llamada
        const espia  = spyOn(servicio,'borrarMedico').and.returnValue(empty());

        componente.borrarMedico('1');

        expect(espia).not.toHaveBeenCalledOnceWith('1');

    });

});
