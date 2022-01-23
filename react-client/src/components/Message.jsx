import React from 'react';

class Message extends React.Component {
    render() {
        const messageData = this.props.messageData;
        return (
            <div className="container">
                <p className="message">
                    {messageData?.message}
                </p>
                <slot></slot>
            </div>
        )
    }
}

export default Message;