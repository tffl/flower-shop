
import { CardProps } from '../../types/types';
import { Button } from '../UI/Button/Button';
import './card.css'
export const Card = ({ image, name, price, shortDescription }: CardProps) => {

  
  return (
         
    <div className="card">
      <div className="card__imgWrapper ">
        <img className="card__img" src={image || '../../../public/img/fallback.jpg'} alt="plant" />
      </div>
      <h3 className="card__name">{name['en-US']}</h3>
      <div className="card__price">Price: {price} USD</div>
      <div className="card__description">{shortDescription}</div>
      <Button className='card__btn' onClick={()=>console.log('click')}>more details...</Button>
    </div>
  );
}