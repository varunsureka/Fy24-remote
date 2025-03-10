import React from "react";

const ProductTile = ({ product, id }) => {
  return (
    <div
      className="product-tile"
      data-testid={`product-tile-${id}`}
    >
      <h3 data-testid={`product-name-${id}`}>{product.name}</h3>
      <p data-testid={`product-flavor-${id}`}>Flavor: {product.flavor}</p>
      <p data-testid={`product-color-${id}`}>Color: {product.color}</p>
      <p data-testid={`product-price-${id}`}>Price: ${product.price}</p>
    </div>
  );
};

export default ProductTile;
