import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";


describe('Pruebas en el archivo temple-string.test.js', () => {
    test('Debe de retornar un string', () => {
        const nombre = 'sergio';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
    })
    // getSaludo debe de retornar Hola Carlos si no hay argumento nombre
    test('Debe de retornar Hola david si no hay argumento nombre', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola sr sergio');
    })
});