import React from 'react';

const Clima = ({clima}) => {
    const {name, main} = clima;

    if(!name) return null;
    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2> 
                <p className="temperatura"> 
                    {main.temp}
                    <span>&#x2103;</span>
                </p>
                <p> Temperatura maxima: 
                    {main.temp_max}
                    <span>&#x2103;</span>
                </p>
                <p> temperatura minima:  
                    {main.temp_min}
                    <span>&#x2103;</span>
                </p>
            </div>
            
        </div>
     );
}
 
export default Clima;