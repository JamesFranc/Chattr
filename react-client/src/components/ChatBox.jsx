import React from 'react';
import Message from './Message';
class ChatBox extends React.Component {
    render() {
        const selectedUser = this.props.selectedUser;
        const messageData = {
            message: "Hey There"
        };
        return (
            <div>
                {selectedUser}
                <Message messageData={messageData} />
            </div>
        )
    }
}

export default ChatBox;