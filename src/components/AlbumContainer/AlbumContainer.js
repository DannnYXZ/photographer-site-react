import React from 'react';
import './AlbumContainer.css'

class AlbumContainer extends React.Component {
    render() {
        return (
            <div className="album-container">
                {this.props.children}
            </div>
        );
    }
}

export default AlbumContainer;
