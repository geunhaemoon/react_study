import React from 'react';
import Input from '../Atome/Input/Input';

function UsernameInput({ onChange }) {
    return (
        <div>
            <Input name={"username"} onChange={onChange}/>
        </div>
    );
}

export default UsernameInput;