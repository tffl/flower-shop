import { useEffect, useState } from "react";
import { executeApiRequest } from "../../app/universal";
import "./catalog.css";
import { FormattedProduct, Product } from "../../types/types";
import { Card } from "../card/Card";

export const Catalog = () => {
  const [formattedProducts, setFormattedProducts] = useState<
    FormattedProduct[]
  >([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await executeApiRequest({
          endpoint: "product-projections",
          query: { limit: "20" },
        });

        console.log("Товары:", productsData.results);
        const products = productsData.results;

        const formatted: FormattedProduct[] = products.map(
          (product: Product) => ({
            id: product.id,
            key: product.key,
            name: product.name,
            description: product.description,
            price: product.masterVariant?.prices?.[0]?.value?.centAmount
              ? product.masterVariant.prices[0].value.centAmount / 100
              : 0,
            image: product.masterVariant.images?.[0]?.url || null,
            attributes:
              product.masterVariant.attributes?.reduce(
                (acc: Record<string, number>, attr) => {
                  if (attr && attr.name) {
                    acc[attr.name] = attr.value;
                  }
                  return acc;
                },
                {},
              ) || {},
          }),
        );

        console.log("Форматированные товары:", formattedProducts);
        setFormattedProducts(formatted);
      } catch (error) {
        console.error("Ошибка:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="catalog">
        <div className="catalog__options">
          <h3 className="catalog__title"> categories </h3>
          <div className="catalog__categories categories">
            <section className="categories__item">
              <h3 className="categories__title">
                <button className="categories__title-button">
                  indoor plants
                </button>
              </h3>
              <ul className="categories__subcategories">
                <li className="categories__subcategory">
                  <button className="categories__subcategory-button">
                    flowering plants
                  </button>
                </li>
                <li className="categories__subcategory">
                  <button className="categories__subcategory-button">
                    floor plants
                  </button>
                </li>
              </ul>
            </section>
            <section className="categories__item">
              <h3 className="categories__title">
                <button className="categories__title-button">
                  accessories
                </button>
              </h3>
              <ul className="categories__subcategories">
                <li className="categories__subcategory">
                  <button className="categories__subcategory-button">
                    soil for flowers
                  </button>
                </li>
                <li className="categories__subcategory">
                  <button className="categories__subcategory-button">
                    flower pots
                  </button>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div className="catalog__productDisplay">
          <h3>Our plants</h3>
          <div className="catalog__list list">
            {formattedProducts.map((good) => (
              <Card
                key={good.id}
                id={good.id}
                image={good.image}
                name={good.name}
                price={good.price}
                description={good.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
