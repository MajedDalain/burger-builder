import React from 'react';
import BurgerIngrident from './BurgerIngrident/BurgerIngrident';
import Aux from '../../../containers/hoc/Aux/Aux';

// will take a list of ingridenets with amount and render list of ingridents compoentns with a class based on props. 
const burgerIngridents = (props) => {

    let allIngridents = []; 
    const ingridentsLabels = Object.keys(props.ingridents);
    
    ingridentsLabels.map(el => {
        for(let i = 0 ; i < props.ingridents[el]; i++) {
            allIngridents.push( <BurgerIngrident type= {el}></BurgerIngrident>);   // should check better way
        }
    })
    
    return (
        <Aux>
            <BurgerIngrident type="top-bread">Bread</BurgerIngrident>
                {allIngridents}
            <BurgerIngrident type="bottom-bread">Bottom Bread</BurgerIngrident>
        </Aux>
         
    );
}

export default burgerIngridents;