const Resultado = ({total, plazo, cantidad}) => (  
        <div className="u-full-width resultado">
                <h2>Resumen</h2>
                <p>la cantidad solicitada es: $ {cantidad}</p>
                <p>A pagar en: {plazo} Meses</p>
                <p>Su pago mensual es de: $ {(total / plazo).toFixed(2)} </p>
                <p>Total a Pagar: $ {total}</p>
        </div>
    );

 
export default Resultado;