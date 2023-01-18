import { getImagen } from "../../base/11-async-await";

 

 describe('async/await', () => {
    test('Debe retonar una url con la img', async() => {
        const url = await getImagen();

        expect( typeof url ).toBe('string');
    });
 });