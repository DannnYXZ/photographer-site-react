import React from 'react';
import './Item.css'

class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='item'>
                <a className='link' href={this.props.link}>
                    <div className='lazy-image'>
                        <canvas className='placeholder'></canvas>
                        <img className='lazyloaded lazyautosizes'/>
                    </div>
                </a>
            </div>
        );
    }
}