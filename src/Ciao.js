import React from 'react';

function Ciao(props) {
    console.log(props)
    return (
        <div>
            <i>Ciao!!! Bella!!{props.name} de {props.from} {props.sad}</i>
        </div>
    );
}

export default Ciao;