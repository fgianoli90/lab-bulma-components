import React from 'react';
import FormField from './FormField';
import CoolButton from './CoolButton';

function SignUp() {
    return (
    <div className="SignUp">
        <div>
            <FormField label="Password" type="text" placeholder="!@#$%"/>
        </div> 
        <div> 
            <CoolButton name="Register" link="./App.js" class="button is-small is-success"/>
        </div>
    </div>
    );
}

export default SignUp;