import React, { useState, Fragment } from 'react'
import { calcutlarTotal } from '../helpers/helpers'

// Cuando las props cson muchas, el destructuring ya no queda bien, le pasamos props y creamos una variable dentro con las props en destructuring
const Form = (props) => {

    const { cantidad, setcantidad, plazo, setplazo, settotal, setcargando } = props


    //definir state para mensaje de error
    const [error, setError] = useState(false)

    const calcularPrestamo = (e) => {
        e.preventDefault()

        //validar
        if (cantidad === 0 || plazo === '') {
            setError(true)
            return // con este return hacemos que no se ejecute la siguiente línea, es decir el quitar el mensaje de error, ya que solo quiero que se quite cuando el usuario haya rellenado correctamente los campos
        }

        //eliminamos el error
        setError(false)

        //habilitamos el spinner
        setcargando(true)


        setTimeout(() => {
            //realizar la cotización
            const total = calcutlarTotal(cantidad, plazo)

            //una vez calculado guardamos en el state el total
            settotal(total)

            //deshabilitamos el spinner
            setcargando(false)


        }, 3000)
    }


    return (

        <Fragment>
            <form onSubmit={calcularPrestamo}>
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input
                            className="u-full-width"
                            type="number"
                            placeholder="Ejemplo: 3000"
                            onChange={e => setcantidad(parseInt(e.target.value))} // como el valor del input lo recibimos en string, hay que cambiarlo a number. Para ahorrar código podemos poner la función directamente en el onChange
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select
                            className="u-full-width"
                            onChange={e => setplazo(parseInt(e.target.value))} // como el valor del input lo recibimos en string, hay que cambiarlo a number. Para ahorrar código podemos poner la función directamente en el onChange

                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Calcular"
                            className="button-primary u-full-width"
                        />
                    </div>
                </div>
            </form>
            {(error) ? <p className="error">Todos los campos son obligatorios</p> : null}

        </Fragment>
    );
}

export default Form;