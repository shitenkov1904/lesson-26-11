import { URL } from "./config.js";
import { getData } from "./apiRequests.js";
import { displayData } from "./utils/displayData.js";

const LIST = document.querySelector("ul");
const MIN = document.querySelector(".min");
const MAX = document.querySelector(".max");
const TITLE = document.querySelector(".title");

document.addEventListener("DOMContentLoaded", async () => {
  const data = await getData(`${URL}/products`);
  console.log(data);

  displayData(LIST, data, "products");
});
document.querySelector(".search").addEventListener("click", () => {
  document.querySelector(".searchI").style.transform = "translateX(0%)";
  document.addEventListener("keydown", async (e) => {
    if (e.code === "Enter") {
      if (MIN.value && MAX.value !== "") {
        if (TITLE.value !== "") {
          const data = await getData(
            `${URL}/products/?price_min=${MIN.value}&price_max=${MAX.value}&title=${TITLE.value}`
          );
          displayData(LIST, data, "products");
		    document.querySelector(".searchI").style.transform = "translateX(350%)";
        } else {
          const data = await getData(
            `${URL}/products/?price_min=${MIN.value}&price_max=${MAX.value}`
          );
          displayData(LIST, data, "products");
		    document.querySelector(".searchI").style.transform = "translateX(350%)";
        }
      }
    }
  });
});
