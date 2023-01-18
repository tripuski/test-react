import { getUser, getUsuarioActivo } from "../../base/05-funciones";


describe('Pruebas en el archivo 05-funciones.test.js ', () => {
        test('debe de retornar un objeto ', () => {
            const userTest = {
                uid: 'ABC123',
                username: 'solo verde'
            };
            const user = getUser();
            expect(user).toEqual(userTest);
        });

        //validar que el objeto retornado por la funcion getUsuarioActivo tenga el mismo nombre que el argumento que se le pasa a la funcion
        test('debe de retornar un objeto mandado el nombre por parametro ', () => {
            const nombre = 'sergio';
            const user = getUsuarioActivo(nombre);
            expect(user).toEqual({username: nombre, uid: 'ABC567'});
        });
});