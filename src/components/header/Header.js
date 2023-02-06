import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import { Fade } from 'react-reveal';
import { greeting } from '../../data.js';
import React from 'react';
import { chosenTheme } from '../../theme';

function Header(props) {
  const theme = chosenTheme;
  const onMouseEnter = (event, color) => {
    const el = event.target;
    el.style.backgroundColor = color;
  };

  const onMouseOut = event => {
    const el = event.target;
    el.style.backgroundColor = 'transparent';
  };
  const link = '/';
  return (
    <div>
      <header className="header">
        <NavLink to={link} tag={Link} className="logo">
          <span style={{ color: theme.text }}> &lt;</span>
          <span className="logo-name" style={{ color: theme.text }}>
            {greeting.logo_name}
          </span>
          <span style={{ color: theme.text }}>/&gt;</span>
        </NavLink>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu" style={{ backgroundColor: theme.body }}>
          <li>
            <NavLink
              to="/"
              tag={Link}
              activestyle={{ fontWeight: 'bold' }}
              style={{ color: theme.text }}
              onMouseEnter={event => onMouseEnter(event, theme.highlight)}
              onMouseOut={event => onMouseOut(event)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/education"
              tag={Link}
              activestyle={{ fontWeight: 'bold' }}
              style={{ color: theme.text }}
              onMouseEnter={event => onMouseEnter(event, theme.highlight)}
              onMouseOut={event => onMouseOut(event)}
            >
              Education
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              tag={Link}
              activestyle={{ fontWeight: 'bold' }}
              style={{ color: theme.text }}
              onMouseEnter={event => onMouseEnter(event, theme.highlight)}
              onMouseOut={event => onMouseOut(event)}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              tag={Link}
              activestyle={{ fontWeight: 'bold' }}
              style={{ color: theme.text }}
              onMouseEnter={event => onMouseEnter(event, theme.highlight)}
              onMouseOut={event => onMouseOut(event)}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              tag={Link}
              activestyle={{ fontWeight: 'bold' }}
              style={{ color: theme.text }}
              onMouseEnter={event => onMouseEnter(event, theme.highlight)}
              onMouseOut={event => onMouseOut(event)}
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
