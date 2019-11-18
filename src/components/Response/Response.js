import React from 'react';
import './Response.css'

class Response extends React.Component {
    render() {
        return (
            <div className='response-item'>
                <div className='from'>
                    {this.props.username}
                </div>
                <span className='content'>
                    {this.props.content}
                </span>
            </div>
        );
    }
}
export default Response;