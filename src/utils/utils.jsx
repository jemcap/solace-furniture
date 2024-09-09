import hero1img from "../assets/hero1.webp";
import hero2img from "../assets/hero2.webp";
import hero3img from "../assets/hero3.webp";
import hero4img from "../assets/hero4.webp";

import axios from "axios";

export const hero1 = hero1img;
export const hero2 = hero2img;
export const hero3 = hero3img;
export const hero4 = hero4img;

export const formatPrice = (price) => {
  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format((price / 100).toFixed(2));
  return formatter;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, i) => {
    const amount = i + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};

export const fetchUrl = axios.create({
  baseURL: "https://strapi-store-server.onrender.com/api",
});
