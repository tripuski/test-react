

describe('pruebas en el archivo demo.test.js', () => {
    test('Deben ser iguales los string', () => { 

        // 1. Inicialización
        const mensaje = 'Hola Mundo';

        // 2. Estímulo
        const mensaje2 = `Hola Mundo`;

        // 3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2); // ===

    })
});