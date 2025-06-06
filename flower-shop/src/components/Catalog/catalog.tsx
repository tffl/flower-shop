import { Card } from "../card/Card";
import { DetailedCard } from "../card/detailedCard";
import { useEffect, useMemo, useState } from "react";
import { executeApiRequest } from "../../utils/universal";
import { transformProducts } from "../../utils/transformData";
import { filterByCategory } from "../../utils/filters";
import { FormattedProduct, SortOption } from "../../types/types";
import { fetchCategoryIds } from "../../utils/categories";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./catalog.css";
import { sortProducts } from "../../utils/sort";

export const Catalog = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const productId = params.get("productId");
  const [formattedProducts, setFormattedProducts] = useState<
    FormattedProduct[]
  >([]);
  const [categories, setCategories] = useState<{
    mainCategories: string[];
    subCategories: string[];
  }>({ mainCategories: [], subCategories: [] });
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [isMainCategory, setIsMainCategory] = useState<boolean>(true);
  const [sortOption, setSortOption] = useState<SortOption>("price-asc");

  useEffect(() => {
    const loadData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          executeApiRequest({
            endpoint: "product-projections",
            query: { limit: "20" },
          }),
          fetchCategoryIds(),
        ]);
        console.log(productsData.results);
        setFormattedProducts(transformProducts(productsData.results));
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, []);

  const filteredProducts = useMemo(() => {
    const filtered = filterByCategory(
      formattedProducts,
      activeCategoryId,
      isMainCategory,
    );
    return sortProducts(filtered, sortOption);
  }, [formattedProducts, activeCategoryId, isMainCategory, sortOption]);

  const selectedProduct = formattedProducts.find(
    (product) => product.id === productId,
  );

  const handleCategoryClick = (categoryId: string | null, isMain: boolean) => {
    // console.log(categoryId)
    setActiveCategoryId(categoryId);
    setIsMainCategory(isMain);
  };

  return (
    <div className="catalog">
      <div className="catalog__options">
        <h2 className="catalog__title">Categories</h2>
        <div className="catalog__categories categories">
          <section className="categories__item">
            <h3 className="categories__title">
              <button
                className={`categories__title-button ${
                  activeCategoryId === categories.mainCategories[0]
                    ? "active"
                    : ""
                }`}
                onClick={() => {
                  if (categories.mainCategories[0]) {
                    handleCategoryClick(categories.mainCategories[0], true);
                  }
                }}
              >
                Indoor plants
              </button>
            </h3>
            <ul className="categories__subcategories">
              <li className="categories__subcategory">
                <button
                  className={`categories__subcategory-button ${
                    activeCategoryId === categories.subCategories[0]
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {
                    if (categories.subCategories[0]) {
                      handleCategoryClick(categories.subCategories[0], false);
                    }
                  }}
                >
                  flowering plants
                </button>
              </li>
              <li className="categories__subcategory">
                <button
                  className={`categories__subcategory-button ${
                    activeCategoryId === categories.subCategories[1]
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {
                    if (categories.subCategories[1]) {
                      handleCategoryClick(categories.subCategories[1], false);
                    }
                  }}
                >
                  floor plants
                </button>
              </li>
            </ul>
          </section>
          <section className="categories__item">
            <h3 className="categories__title">
              <button
                className={`categories__title-button ${
                  activeCategoryId === categories.mainCategories[1]
                    ? "active"
                    : ""
                }`}
                onClick={() => {
                  if (categories.mainCategories[1]) {
                    handleCategoryClick(categories.mainCategories[1], true);
                  }
                }}
              >
                accessories
              </button>
            </h3>
            <ul className="categories__subcategories">
              <li className="categories__subcategory">
                <button
                  className={`categories__subcategory-button ${
                    activeCategoryId === categories.subCategories[2]
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {
                    if (categories.subCategories[2]) {
                      handleCategoryClick(categories.subCategories[2], false);
                    }
                  }}
                >
                  flower pots
                </button>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <div className="catalog__productDisplay">
        <button
          onClick={() => {
            setActiveCategoryId(null);
            setIsMainCategory(true);
          }}
          className={`catalog__showAll ${!activeCategoryId ? "active" : ""}`}
        >
          All our plants
        </button>
        <div className="catalog__sorting">
          <label htmlFor="sort-select">Sort by: </label>
          <select
            id="sort-select"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as SortOption)}
            className="catalog__select"
          >
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="size-asc">Size (Small to Large)</option>
            <option value="size-desc">Size (Large to Small)</option>
          </select>
        </div>
        <div className="catalog__list list">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              image={product.images?.[0]?.url || null}
              name={product.name}
              price={product.price}
              discountedPrice={product.discountedPrice}
              shortDescription={product.attributes.shortDescription}
            />
          ))}
        </div>
      </div>
      {productId && selectedProduct && (
        <DetailedCard
          product={selectedProduct}
          onClose={() => navigate("/catalog")}
        />
      )}
    </div>
  );
};
