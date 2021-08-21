import React from 'react'

// en vez de props le puedes aplicar destruscturing. Con la arrow function,snipet scf, puedes quitar las llaves y el el return dejando los paréntesis SOLO CUANDO NO NECESITES ESCRBIR LÓGICA JS EN LA FUNCION, SEA SOLO PARA MOSTRAR y también se puede quitar el Fragment

const Header = ({ titulo }) => (
    <h1>{titulo}</h1>

);


export default Header;
