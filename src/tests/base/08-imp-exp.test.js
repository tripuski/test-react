import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en el archivo 08-imp-exp.test.js', () => {
    test('Debe de retornar un héroe', () => {
        const id = 1;
        const heroe = getHeroeById( id );
        const heroeData = heroes.find( h => h.id === id );


        expect( heroe ).toEqual( heroeData );
    })


    test('Debe de retornar undefined si no existe el id de un héroe', () => {
        const id = 10;
        const heroe = getHeroeById( id );


        expect( heroe ).toBe( undefined );
    })

    test('Retonar  un arreglo de los  heroes de DC', () => {
        const owner = 'DC';
        const heroeDC = getHeroesByOwner( owner );

        const heroesData = heroes.filter( h => h.owner === owner );

        expect( heroeDC ).toEqual( heroesData );
    })

    test('Retonar  un arreglo de los  heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroeDC = getHeroesByOwner( owner ).length;

        expect( heroeDC ).toBe( 2 );
    })

})