import React, { useState } from 'react';

function UserSelect(props) {

    const users = [
        {name: 'Nemo', key:1}, 
        {name: 'Pierre', key: 2}
    ].map((user) => <option key={user.key} value={user.name}>{user.name}</option>);
    
    const changeHandler = function(e) {
        props.parentCallBack(e.target.value);
        e.preventDefault();
    }

    return (
    <div>
        <select onChange={changeHandler}>
            {users}
        </select>       
    </div>
    );
}

export default UserSelect;