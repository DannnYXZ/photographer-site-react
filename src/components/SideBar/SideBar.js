import React from 'react';
import './SideBar.css'
import Logo from "../Logo/Logo";
import LazyImage from "../LazyImage/LazyImage";

class SideBar extends React.Component {
  render() {
    return (
        <aside className="sidebar">
          <LazyImage src={this.props.background.src}
                     style={{
                       position: 'absolute',
                       top: 0,
                       left: 0,
                       right: 0,
                       bottom: 0,
                     }}
                     placeholderColor={this.props.background.avg}/>
          <Logo/>
          <div className='sidebar-social'>
            {this.props.social}
          </div>
        </aside>
    );
  }
}

export default SideBar;