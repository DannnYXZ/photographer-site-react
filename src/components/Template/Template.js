import './Template.css';
import React from 'react';

class Template extends React.Component {
  render() {
    return (
        <div className="app">
          {this.props.sidebar}
          <main className="main">
            <div className="content">
              <header className="main-header">
                {this.props.menu}
              </header>
              {this.props.content}
            </div>
            {this.props.footer}
          </main>
        </div>
    );
  }
}

export default Template;
