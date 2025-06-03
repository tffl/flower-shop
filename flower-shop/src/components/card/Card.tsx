import { CardProps } from '../../types/types';
import { Button } from '../UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import './card.css'
export const Card = ({ id, image, name, price, shortDescription }: CardProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/catalog?productId=${id}`);
  };

  return (

    <div className="card">
      <div className="card__imgWrapper ">
        <img className="card__img" src={image || '../../../public/img/fallback.jpg'} alt="plant" />
      </div>
      <h3 className="card__name">{name['en-US']}</h3>
      <div className="card__price">Price: {price} USD</div>
      <div className="card__description">{shortDescription}</div>
      <Button className="card__btn" onClick={handleClick}>
        more details...
      </Button>
    </div>
  );
}