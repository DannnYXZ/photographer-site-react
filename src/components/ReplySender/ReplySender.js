import React from 'react';
import './ReplySender.css'

class ReplySender extends React.Component {
    render() {
        return (
            <div className='reply-sender'>
                <form action='post-comment' method='post'>
                    <textarea
                        className="message"
                        name="message"
                        placeholder="Message"
                        maxLength={4096}>
                    </textarea>
                    <button className='btn-send' type="submit" formMethod="post">SEND</button>
                </form>
            </div>
        );
    }
}

export default ReplySender;