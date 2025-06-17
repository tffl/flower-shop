import { IPropsProduct } from "./basketTypes.ts";
import { Button } from "../UI/Button/Button.tsx";
import { updateCartQuantity } from "./APICart.ts";

//...........................................................
export function BasketCard(product: IPropsProduct) {
  return (
    <div className="good-card" key={product.product.id}>
      <div className="card__img">
        <img src={product.product.image} alt="img"></img>
      </div>
      <p>{product.product.name}</p>

      {product.product.price === product.product.oldprice ? (
        <p>
          {" "}
          <span className="cart__card-price">${product.product.price}</span>
        </p>
      ) : (
        <p>
          {" "}
          <span className="cart__card-price">
            ${product.product.price}
          </span> ({" "}
          <span className="cart__card-price-old">
            ${product.product.oldprice}
          </span>
          )
        </p>
      )}

      <input
        className="card__count"
        name={product.product.id}
        type="number"
        defaultValue={product.product.quantity}
        min="1"
        max="25"
        onChange={(e) => updateQuantity(e)}
      ></input>
      <Button
        className="card__delete-btn"
        name={product.product.id}
        onClick={(e) => deleteProduct(e)}
      >
        Delete
      </Button>
    </div>
  );
}

//..........................................................................
async function deleteProduct(
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) {
  const pButton = e.target as HTMLButtonElement;
  let itemId = pButton.name;
  updateCartQuantity(itemId, 0);

  if (pButton.parentElement) pButton.parentElement.remove();
}

//.........................................................................
async function updateQuantity(e: React.ChangeEvent<HTMLInputElement>) {
  const pInput = e.target as HTMLInputElement;
  let productCount = 0;
  if (pInput) productCount = Number(pInput.value);

  let itemId = e.target.name;
  updateCartQuantity(itemId, productCount);
}
