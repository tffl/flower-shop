import { Link } from 'react-router-dom';
import './menu.css'


export const Menu = () => {
  return (
    <ul className='menu'>
      <li className='menu__item'>
        <Link to='/'>
          home
        </Link>
      </li>
      <li className='menu__item'>
        <Link to='/catalog'>
         catalog
        </Link>
      </li>
      <li className='menu__item'>
        <Link to='/about'>
          about us
        </Link>
      </li>
      <li className='menu__item'>
        <a href='#footer'>
          Contacts
        </a>
      </li>
    </ul>
  );
};
