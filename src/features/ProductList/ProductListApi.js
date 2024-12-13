import { wait } from "@testing-library/user-event/dist/cjs/utils/index.js";

// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/products");
    const data = await response.json();

    resolve({ data });
  });
}

export function fetchFilterProducts(filter) {
  console.log("received filter:", filter);
  let queryString = Object.keys(filter)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(filter[key])}`
    )
    .join("&");

  console.log(queryString);
  return new Promise(async (resolve) => {
    const response = await fetch(
      `http://localhost:8000/products?${queryString}`
    );
    const data = await response.json();

    resolve({ data });
  });
}
