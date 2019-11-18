import React from 'react';
import './Menu.css'
import {Link} from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
        <div className="menu js-menu">
          <ul className="menu-list ">
            {this.props.children.map((item, i) =>
                <li className="menu-item" key={i}>
                  <Link className="link"
                        to={item.link}>
                    {item.name}
                  </Link>
                </li>)}
          </ul>
        </div>
    );
  }
}

export default Menu;