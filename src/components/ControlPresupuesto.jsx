import React, {Fragment} from 'react';

const Presupuesto = ({presupuesto, restante}) => {
    return ( 
        <Fragment>
            <div className= "alert alert-primary">
                Presupuesto: $ {presupuesto}

            </div>

            <div className="alert">
                Restante: ${restante}
            </div>
        </Fragment>
     );
}
 
export default Presupuesto;