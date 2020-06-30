import React, {useState} from 'react';    
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre] = useState("");
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError ] = useState(false);
    

    const agregarGasato = (e) =>{
        e.preventDefault();

        // Validar

        if(cantidad<1 || isNaN(cantidad) || nombre.trim() === "" ){
            guardarError(true);
            return
        }else{
            guardarError(false);
        }

        // Construir el Gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        console.log(gasto)
        

        // Pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);


        // Resetear el Form
        guardarNombre("");
        guardarCantidad(0);

    }



    return ( 
        <form
            onSubmit={agregarGasato}
        >
            
            <h2>Agrega tus Gastos</h2>

            {error ? <Error mensaje= "Ambos campos son obligatorios o Presupuesto Incorrecto"/> : null}

            <div>
                <label>Nombre de Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ejemplo Transporte"    
                    value = {nombre}
                    onChange= {e => guardarNombre(e.target.value)}
                />
            </div>

            <div>
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ejemplo 300"
                    value = {cantidad}
                    onChange= {e => guardarCantidad(parseInt(e.target.value, 10))}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />

        </form>    


     );
}
 
export default Formulario;