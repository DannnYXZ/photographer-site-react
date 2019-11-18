import React from 'react';
import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
        <footer className="footer">
          <div className="footer-content text-section wysiwyg">
            <p>Фотограф Шунтиков Сергей</p>
            <p>
              <b><a className='footer-tel'
                    href="tel:+79649111150"
                    target="_blank"
                    rel="noopener noreferrer">+7-964-911-11-50</a></b>
            </p>
          </div>
          <div className="branding">Сайт от DannnYXZ</div>
        </footer>
    );
  }
}

export default Footer;