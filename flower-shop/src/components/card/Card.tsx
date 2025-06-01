import { CardProps } from '../../types/types';
import './card.css'
export const Card = ({ image, name, price, description }: CardProps) => {
  return (
         
    <div className="card">
      <div className="card__imgWrapper ">
        <img className="card__img" src={image || '../../../public/img/fallback.jpg'} alt="pet" />
      </div>
      <h3 className="card__name">{name['en-US']}</h3>
      <div className="card__price">Price: {price} USD</div>
      <div className="card__description">{description['en-US']}</div>
    </div>
  );
}