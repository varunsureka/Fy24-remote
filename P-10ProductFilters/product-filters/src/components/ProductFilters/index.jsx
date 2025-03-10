import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown/index.jsx";
import ProductTile from "./ProductTile/index.jsx";
import {
  allProducts,
  flavourOptions,
  colorOptions,
} from "./constants/constants.js";

const ProductFilters = () => {
  const [flavor, setFlavor] = useState("");
  const [color, setColor] = useState("");
  const [products, setProducts] = useState(allProducts);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const handleFlavorChange = (e) => {
    // Update Flavor
    setFlavor(e.target.value);
  };
  const handleColorChange = (e) => {
    // Update Color
    setColor(e.target.value);
  };

  const filteredProducts = (products) => {
    return products
      .filter((product) => (flavor ? product.flavor === flavor : product))
      .filter((product) => (color ? product.color === color : product));
    // Add Logic to Filter the Products Based on Flavor and Color. All the filter states must be preserved i.e. if the user selects a flavor and color, the products should be filtered based on both the filters.
  };

  const handleLoadMore = () => {
    // Hide Load More Button Once the Load More Button is Clicked
    setShowLoadMore(false);
  };

  useEffect(() => {
    setProducts(filteredProducts(allProducts));
  }, [flavor, color]);

  return (
    <div className="container" data-testid="container">
      <h1 className="page-heading">Product Listing Page</h1>
      <div className="filter-group" data-testid="filter-group">
        <Dropdown
          label={"Flavour"}
          id="flavor"
          options={flavourOptions}
          selectedValue={flavor}
          handleOptionChange={handleFlavorChange}
        />
        <Dropdown
          label={"Color"}
          id="color"
          options={colorOptions}
          selectedValue={color}
          handleOptionChange={handleColorChange}
        />
      </div>
      <div
        className="product-tile-container"
        data-testid="product-tile-container"
      >
        {/*Render Product Tiles With Required Props Here. On Initial Load only 6 tiles should be shown. Once the User clicks on Load More button, all the tiles should be displayed*/}
        {showLoadMore
          ? products
              .slice(0, 6)
              .map((product, index) => (
                <ProductTile product={product} id={index} key={index} />
              ))
          : products.map((product, index) => (
              <ProductTile product={product} id={index} key={index} />
            ))}
        {/*Render text "No Products Found" in a h3 tag when no products match the applied filters*/}
        {!products.length && <h3>No Products Found</h3>}
      </div>
      {/*Once Load More Button is Clicked and All the Products are displayed on the UI, User should not be able to see Load More Button*/}
      {showLoadMore && (
        <div
          className="load-more-btn-container"
          data-testid="load-more-btn-container"
        >
          <button
            className="load-more-btn"
            data-testid="load-more-btn"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductFilters;
