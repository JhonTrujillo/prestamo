import React from 'react'
const  Formulario = () => {
    return (
<fornm>
    <div className='row'>
        <div>
            <label>Cantidad Prestamo</label>
            <input
                className='u-full-width'
                type='number'
                placeholder='Ejemplo: 3000'
            />
        </div>
        <div>
            <label>Plazo a Pagar</label>
            <select className='u-full-width'>
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
</fornm>
        
      );
}
 
export default Formulario;