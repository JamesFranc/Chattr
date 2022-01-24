import React, { useState } from 'react';
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
function UserSelect() {
    const [user, setUser] = useState('');
    const changeHandler = function(e) {
        console.log(`${e.target.value} was selected!`);
    }
    const users = [
        {name: 'Nemo', key:1}, 
        {name: 'Pierre', key: 2}
    ].map((user) => <option key={user.key} value={user.name}>{user.name}</option>);
    

    return (
    <div>
        <select onChange={changeHandler}>
            {users}
        </select>       
    </div>
    );
}

export default UserSelect;