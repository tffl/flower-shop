import { Link } from 'react-router-dom';
import { Submenu } from '../UI/Submenu/Submenu';
import { Menu } from '../UI/Menu/Menu';
import './header.css';
import { HeaderProps } from '../../types/types';

export const Header = ({textColor="var(--color-txt)", position="fixed",backColor="#ffffff" }:HeaderProps) => {
  return (
    <header className='header' style={{position:position,backgroundColor:backColor}}>
      <div className='header__wrapper container'>
          <Link  style={{ color: textColor}} className='header__logo' to='/'>
        Blossom Bay
        </Link>
        <Menu textColor={textColor}/>
        <Submenu textColor={textColor}/>
      </div>
    </header>
  );
};
