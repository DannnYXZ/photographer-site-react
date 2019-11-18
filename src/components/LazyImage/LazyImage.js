import './LazyImage.css'
import React from 'react';
import 'lazysizes';

class LazyImage extends React.Component {
  render() {
    return (
        <div className='lazy-container'
             style={{
               ...this.props.style,
               backgroundColor: this.props.placeholderColor
             }}>
          <img data-src={this.props.src}
               alt={this.props.alt}
               className='lazy-image lazyload'/>
        </div>
    );
  }
}

export default LazyImage;