import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProductFilters from "./src/components/ProductFilters/index";

test("filters products by flavour", () => {
  const { getByTestId, getAllByTestId } = render(<ProductFilters />);

  fireEvent.change(getByTestId("flavor-select"), {
    target: { value: "Vanilla" },
  });

  const productTiles = getAllByTestId(/product-tile-[0-9]/);
  productTiles.forEach((tile) => {
    expect(tile).toHaveTextContent("Flavor: Vanilla");
  });
});

test("filters products by colour", () => {
  const { getByTestId, getAllByTestId } = render(<ProductFilters />);

  fireEvent.change(getByTestId("color-select"), { target: { value: "Red" } });

  const productTiles = getAllByTestId(/product-tile-[0-9]/);
  productTiles.forEach((tile) => {
    expect(tile).toHaveTextContent("Color: Red");
  });
});

test("filters products by flavour and colour", () => {
  const { getByTestId, getAllByTestId } = render(<ProductFilters />);

  fireEvent.change(getByTestId("flavor-select"), {
    target: { value: "Vanilla" },
  });

  let productTiles = getAllByTestId(/product-tile-[0-9]/);
  productTiles.forEach((tile) => {
    expect(tile).toHaveTextContent("Flavor: Vanilla");
  });

  fireEvent.change(getByTestId("color-select"), { target: { value: "Red" } });

  productTiles = getAllByTestId(/product-tile-[0-9]/);
  productTiles.forEach((tile) => {
    expect(tile).toHaveTextContent("Color: Red");
  });
});

test("only 6 products should be present on screen on page load", () => {
  const { getAllByTestId } = render(<ProductFilters />);

  const productTiles = getAllByTestId(/product-tile-[0-9]/);
  expect(productTiles.length).toEqual(6);
});

test("loads more products when Load More button is clicked", () => {
  const { getByTestId, getAllByTestId } = render(<ProductFilters />);

  fireEvent.click(getByTestId("load-more-btn"));

  const productTiles = getAllByTestId(/product-tile-[0-9]/);
  expect(productTiles.length).toBeGreaterThan(6);
});

test("load more button should hide after clicking on it", () => {
  const { getByTestId, getAllByTestId } = render(<ProductFilters />);
  const loadMoreButton = getByTestId("load-more-btn");

  fireEvent.click(loadMoreButton);

  expect(loadMoreButton).not.toBeInTheDocument();
});

test("no products found should be displayed when no products match the applied filters", () => {
  const { getByText, getByTestId, getAllByTestId } = render(<ProductFilters />);

  fireEvent.change(getByTestId("flavor-select"), {
    target: { value: "Vanilla" },
  });
  fireEvent.change(getByTestId("color-select"), { target: { value: "Green" } });
  const noProductsFound = getByText("No Products Found");
  expect(noProductsFound).toBeInTheDocument();
});
