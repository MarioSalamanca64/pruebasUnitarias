import { FormularioRegister } from "./formulario";
import { FormBuilder } from '@angular/forms'


    describe('Formularios',() => {
        let componente: FormularioRegister;
        //par que se llame antes de todas las pruebas
        beforeEach(() => {
            componente = new FormularioRegister( new FormBuilder());
        });

        it('Debe de crear un formulario con dos campos',() => {
            expect(componente.form.contains('email')).toBe(true);
            expect(componente.form.contains('password')).toBe(true);
        });

        it('El email debe de ser obligatorio',() =>{
            const control = componente.form.get('email');
            control?.setValue('');
            //que esta condicion del campo sea falsa
            expect(control?.valid).toBeFalsy();
        });

        it('El email debe de ser un correo valido',() =>{
            const control = componente.form.get('email');
            control?.setValue('mario@gmail.com');
            //que esta condicion del campo sea verdadera //falla por que no es un correo valido
            expect(control?.valid).toBeTrue();
        });

    });