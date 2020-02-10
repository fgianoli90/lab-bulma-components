import React from 'react';

function CoolButton(props) {
    return (
        <div>
            <a className={props.class} href={props.link}> {props.name}</a>         
        </div>
    );
}

export default CoolButton;