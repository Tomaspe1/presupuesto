import React from 'react';
import Gasto from './Gasto';
import shortid from 'shortid';



const Listado = ({gastos}) => {
    return ( 
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {gastos.map(gasto => (
                <Gasto 
                    key= {shortid.generate()}
                    gasto= {gasto}
                />                
            ))}


        </div>
        
     );
}
 
export default Listado;