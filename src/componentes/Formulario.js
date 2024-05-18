import React, { Fragment, useState } from 'react'
import { calcularTotal } from '../helpers';

const Formulario = ({ cantidad, guardarCantidad, plazo, guardarPlazo, total, guardarTotal, guardarCargando }) => {

    //Definir state
    const [error, guardarError] = useState(false);

    const leerCantidad = (e) => {
        // console.log(e.target.value)
        guardarCantidad(parseInt(e.target.value));
    }

    const leerPlazo = (e) => {
        // console.log(e.target.value)
        guardarPlazo(parseInt(e.target.value));
    }

    //Cuando el usuario hace submit
    const calcularPrestamo = (e) => {
        e.preventDefault();
        console.log("Enviando Formulario")

        //Validar el formulario
        if (cantidad === 0 || plazo === "") {
            console.log("Hay un error");
            guardarError(true);
            return;
        }
        //elimina error previo
        guardarError(false);

        //habilitar el Spinner
        guardarCargando(true);

        setTimeout(() => {
            //Realizar cotizacion Funcion esta el helper.js
            const total = calcularTotal(cantidad, plazo);
            console.log(total);

            // una vez calculado guardarTotal
            guardarTotal(total);

            //Desactivar Spinner
            guardarCargando(false);
        }, 3000)


    }

    return (
        <Fragment>
            <form onSubmit={calcularPrestamo}>
                {cantidad}
                {plazo}
                <div className='row'>
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input
                            className='u-full-width'
                            type='number'
                            placeholder='Ejemplo: 3000'
                            onChange={leerCantidad}
                        />
                    </div>
                    <div>
                        <label>Plazo a Pagar</label>
                        <select className='u-full-width' onChange={leerPlazo}>
                            <option value="">Seleccionar</option>
                            <option value="3">3 Meses</option>
                            <option value="6">6 Meses</option>
                            <option value="12">12 Meses</option>
                            <option value="24">24 Meses</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type='submit'
                            value='calcular'
                            className='button-primary u-full-width'
                        />
                    </div>
                </div>
            </form>

            {(error) ? <p className="error">Todos los campos son obligatorios</p> : ""}
        </Fragment>
    );
}

export default Formulario;