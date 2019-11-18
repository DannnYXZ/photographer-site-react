import React from 'react';
import {Link} from 'react-router-dom';
import './AlbumCover.css'
import LazyImage from "../LazyImage/LazyImage";

class AlbumCover extends React.Component {
  render() {
    let thumbnail = this.props.thumbnail;
    return (
        <div className='album-cover'>
          <Link className='cover-link' to={this.props.link}>
            <div className='cover-content'>
              <LazyImage src={thumbnail.src}
                         alt={this.props.desc}
                         style={{
                           width: '100%',
                           height: '100%'
                         }}
                         placeholderColor={thumbnail.avg}/>
              <div className='cover-title'>
                <span>{this.props.caption}</span>
              </div>
            </div>
          </Link>
        </div>
    );
  }
}

export default AlbumCover;