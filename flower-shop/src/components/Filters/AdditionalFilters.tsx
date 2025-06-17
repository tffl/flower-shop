import { useState, useEffect } from "react";
import { AdditionalFiltersProps } from "../../types/types";
import "./additionalFilters.css";

export const AdditionalFilters = ({
  products,
  onFilterChange,
}: AdditionalFiltersProps) => {
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [onlyDiscounted, setOnlyDiscounted] = useState(false);

  const allSizes = Array.from(
    new Set(products.flatMap((p) => p.attributes.size || [])),
  ).sort((a, b) => a - b);

  const allColors = Array.from(
    new Set(products.map((p) => p.color).filter(Boolean)),
  ) as string[];

  const maxPrice = Math.max(...products.map((p) => p.price), 100);

  useEffect(() => {
    onFilterChange({
      size: selectedSizes,
      priceRange,
      colors: selectedColors,
      onSale: onlyDiscounted,
    });
  }, [selectedSizes, priceRange, selectedColors, onlyDiscounted]);

  return (
    <div className="additional__filters filters">
      <h3 className="filters__title">Filters</h3>

      <div className="filters__group">
        <h4>Size</h4>
        <div className="filters__options">
          {allSizes.map((size) => (
            <label key={size} className="filters__option">
              <input
                type="checkbox"
                checked={selectedSizes.includes(size)}
                onChange={() =>
                  setSelectedSizes((prev) =>
                    prev.includes(size)
                      ? prev.filter((s) => s !== size)
                      : [...prev, size],
                  )
                }
              />
              <span>{size} cm</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filters__group price">
        <h4>Price up to ${priceRange[1]}</h4>
        <input
          type="range"
          min="0"
          max={maxPrice}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          className="price__slider"
        />
      </div>

      {allColors.length > 0 && (
        <div className="filters__group color">
          <h4>Color</h4>
          <div className="color__options">
            {allColors.map((color) => (
              <button
                key={color}
                className={`color__option ${selectedColors.includes(color) ? "active" : ""}`}
                style={{ backgroundColor: color }}
                onClick={() =>
                  setSelectedColors((prev) =>
                    prev.includes(color)
                      ? prev.filter((c) => c !== color)
                      : [...prev, color],
                  )
                }
                aria-label={color}
              />
            ))}
          </div>
        </div>
      )}

      <div className="filters__group discount">
        <label className="discount__option">
          <input
            type="checkbox"
            checked={onlyDiscounted}
            onChange={() => setOnlyDiscounted(!onlyDiscounted)}
          />
          <span>On Sale Only</span>
        </label>
      </div>
    </div>
  );
};
