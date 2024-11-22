import { wait } from "@testing-library/user-event/dist/cjs/utils/index.js";

// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://localhost:8000");
    const data = await response.json();
    resolve({ data });
  });
}
