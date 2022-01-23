import React from 'react';
class UserSelect extends React.Component {
    render () {
        const users = [
            {name: 'Nemo', key:1}, 
            {name: 'Pierre', key: 2}
        ].map((user) => <option key={user.key} value={user.name}>{user.name}</option>);
        return (
            <div>
                <select>
                    {users}
                </select>       
            </div>
        )
    }
}
export default UserSelect;