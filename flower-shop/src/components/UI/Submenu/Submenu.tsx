import { Link, NavLink } from 'react-router-dom';
import { MenuProps } from '../../../types/types';
import './submenu.css';

export const Submenu = ({textColor}: MenuProps) => {
  return (
    <ul className='submenu'>
      <li className='submenu__item'>
          <Link className='submenu__basket' to='/'>
              <img src='svg/basket.svg' alt='logo' />
          </Link>
      </li>
      <li className='submenu__item'>
        <NavLink to='/login' style={{color: textColor}} className={({ isActive }) => 
            isActive ? 'menu__link active' : 'menu__link'
          }>
          Login|
        </NavLink>
      </li>
      <li className='submenu__item'>
        <NavLink to='/register' style={{color: textColor}} className={({ isActive }) => 
            isActive ? 'menu__link active' : 'menu__link'
          }>
          Register
        </NavLink>
      </li>
    </ul>
  );
};
