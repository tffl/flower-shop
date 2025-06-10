import { IPropsProduct } from "./basketTypes.ts";
import { Button } from "../UI/Button/Button.tsx";

export function BasketCard(product: IPropsProduct) {
  return (
    <div className="good-card" key={product.product.id}>
      <div className="card__img">
        <img src={product.product.image} alt="img"></img>
      </div>
      <p>{product.product.name}</p>
      <p>${product.product.price}</p>
      <input
        className="card__count"
        type="number"
        defaultValue={product.product.quantity}
        min="1"
        max="55"
      ></input>
      <Button
        className="card__delete-btn"
        //   name={address.id}
        onClick={(e) => deleteProduct(e)}
      >
        Delete
      </Button>
    </div>
  );
}

function deleteProduct(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  const pButton = e.target as HTMLButtonElement;
  if (pButton.parentElement) pButton.parentElement.remove();
}
