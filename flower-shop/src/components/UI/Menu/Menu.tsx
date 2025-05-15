import { NavLink } from 'react-router-dom';
import { MenuProps } from '../../../types/types';
import './menu.css';

export const Menu = ({ textColor, className = '' }: MenuProps) => {
  return (
    <ul
      className={className}
      style={
        className.includes('open')
          ? { backgroundColor: `var(--color-txt)` }
          : undefined
      }
    >
      <li className='menu__item'>
        <NavLink
          to='/'
          style={{ color: textColor }}
          className={({ isActive }) =>
            isActive ? 'menu__link active' : 'menu__link'
          }
        >
          home
        </NavLink>
      </li>
      <li className='menu__item'>
        <NavLink
          to='/catalog'
          style={{ color: textColor }}
          className={({ isActive }) =>
            isActive ? 'menu__link active' : 'menu__link'
          }
        >
          catalog
        </NavLink>
      </li>
      <li className='menu__item'>
        <NavLink
          to='/about'
          style={{ color: textColor }}
          className={({ isActive }) =>
            isActive ? 'menu__link active' : 'menu__link'
          }
        >
          about us
        </NavLink>
      </li>
      <li className='menu__item'>
        <a href='#footer' style={{ color: textColor }}>
          Contacts
        </a>
      </li>
    </ul>
  );
};
