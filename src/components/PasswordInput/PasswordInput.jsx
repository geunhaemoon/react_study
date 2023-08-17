import React from 'react';
import Input from '../Atome/Input/Input';

function PasswordInput({ onChange }) {
    return (
        <div>
            <Input type={"password"} name={"password"} onChange={onChange}/>
        </div>
    );
}

export default PasswordInput;