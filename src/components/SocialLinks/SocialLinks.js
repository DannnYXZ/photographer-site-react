import React from 'react';
import './SocialLinks.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faInstagram, faTelegramPlane, faVk} from "@fortawesome/free-brands-svg-icons";

class SocialLinks extends React.Component {
  render() {
    let iconsColor = '#fff';
    return (
        <ul className="social-links">
          {this.props.data.map((item, i) => {
            let icon = {
              'vk': <FontAwesomeIcon icon={faVk} color={iconsColor}/>,
              'instagram': <FontAwesomeIcon icon={faInstagram} color={iconsColor}/>,
              'telegram': <FontAwesomeIcon icon={faTelegramPlane} color={iconsColor}/>,
              'facebook': <FontAwesomeIcon icon={faFacebookSquare} color={iconsColor}/>
            }[item.site];
            return (
                <li className="social-item" key={i}>
                  <a title={item.link}
                     className="link"
                     target="_blank"
                     rel="noopener noreferrer"
                     href={item.link}>
                    {icon}
                  </a>
                </li>)
          })}
        </ul>
    );
  }
}

export default SocialLinks;