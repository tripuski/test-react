import React from 'react';
import PropTypes from 'prop-types';


const PrimerApp = ( { 
    saludo, 
    sutitulo='Hago de sutitulo'
} ) => {

    const nombre = 'sergio';
    return (
        <>
            <h1> { saludo } </h1>
            <p>Mi primera APP felicidades Sr { sutitulo }</p>
        </>
    );
}

PrimerApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimerApp.defaultProps = {
    sutitulo: 'Soy un sutitulo'
}

export default PrimerApp;