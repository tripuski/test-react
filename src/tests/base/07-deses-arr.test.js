import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';

describe('Desestructuración de arreglos', () => {
    test('Extraer valores de un arreglo', () => {
        const [letras, numeros] = retornaArreglo(); // ['ABC', 123]


        // expect(arr).toEqual(['ABC', 123]);
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');

    })
})