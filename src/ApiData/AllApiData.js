import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

// useState for data
import { useState } from "react";

let Data = createContext();
function AllApiData({ children }) {
  let ProductList = [
    {
      id: uuidv4(),
      img: "imgs/strawberry.png",
      title: "strawberry",
      price: 3.0,
      pad: 0,
      mar: 0,
      category: "fruit",
    },
    {
      id: uuidv4(),

      img: "imgs/butter.png",
      title: "butter",
      price: 3.5,
      pad: 0,
      mar: 0,
      category: "dairy",
    },
    {
      id: uuidv4(),

      img: "imgs/eggs.png",
      title: "eggs",
      price: 2.05,
      pad: 3,
      mar: 3,
      category: "dairy",
    },
    {
      id: uuidv4(),

      img: "imgs/cabbage.png",
      title: "cabbage",
      price: 3.0,
      pad: 0,
      mar: 0,
      category: "vegetables",
    },
    {
      id: uuidv4(),

      img: "imgs/eggplant.png",
      title: "eggplant",
      price: 4.0,
      pad: 0,
      mar: 0,
      category: "vegetables",
    },
    {
      id: uuidv4(),

      img: "imgs/shrimp.png",
      title: "shrimp",
      price: 3.3,
      pad: 0,
      mar: 0,
      category: "seaFood",
    },
    {
      id: uuidv4(),

      img: "imgs/kiwi.png",
      title: "kiwi",
      price: 2.5,
      pad: 0,
      mar: 0,
      category: "fruit",
    },
    {
      id: uuidv4(),

      img: "imgs/capsicum.png",
      title: "capsicum",
      price: 5.1,
      pad: 0,
      mar: 0,
      category: "vegetables",
    },
    {
      id: uuidv4(),

      img: "imgs/yogurt.png",
      title: "yogurt",
      price: 5.1,
      pad: 0,
      mar: 0,
      category: "dairy",
    },
    {
      id: uuidv4(),

      img: "imgs/tofu.png",
      title: "tofu",
      price: 5.1,
      pad: 0,
      mar: 0,
      category: "dairy",
    },
    {
      id: uuidv4(),

      img: "imgs/slice-cheese.png",
      title: "cheese",
      price: 5.1,
      pad: 0,
      mar: 0,
      category: "dairy",
    },
    {
      id: uuidv4(),

      img: "imgs/salmon.png",
      title: "salmon",
      price: 5.1,
      pad: 0,
      mar: 0,
      category: "seaFood",
    },
    {
      id: uuidv4(),

      img: "imgs/ricotta-cheese.png",
      title: "ricotta-cheese",
      price: 5.1,
      pad: 0,
      mar: 0,
      category: "dairy",
    },
    {
      id: uuidv4(),

      img: "imgs/pineapple.png",
      title: "pineapple",
      price: 5.1,
      pad: 0,
      mar: 0,
      category: "fruit",
    },
    {
      id: uuidv4(),

      img: "imgs/milk.png",
      title: "milk",
      price: 5.1,
      pad: 0,
      mar: 0,
      category: "dairy",
    },
    {
      id: uuidv4(),

      img: "imgs/meat-and-seafood.png",
      title: "meat-and-seafood",
      price: 5.1,
      pad: 0,
      mar: 0,
      category: "seaFood",
    },
    {
      id: uuidv4(),

      img: "imgs/lettuce.png",
      title: "lettuce",
      price: 5.1,
      pad: 0,
      mar: 0,
      category: "vegetables",
    },
    {
      id: uuidv4(),

      img: "imgs/kale.png",
      title: "kale",
      price: 5.1,
      pad: 0,
      mar: 0,
      category: "vegetables",
    },
    {
      id: uuidv4(),

      img: "imgs/dairy-and-eggs.png",
      title: "dairy-and-eggs",
      price: 5.1,
      pad: 0,
      mar: 0,
      category: "dairy",
    },
    {
      id: uuidv4(),

      img: "imgs/cheese.png",
      title: "cheese",
      price: 5.1,
      pad: 0,
      mar: 0,
      category: "dairy",
    },
    {
      id: uuidv4(),

      img: "imgs/beef.png",
      title: "beef",
      price: 5.1,
      pad: 0,
      mar: 0,
      category: "dairy",
    },
    {
      id: uuidv4(),

      img: "imgs/banana.png",
      title: "banana",
      price: 5.1,
      pad: 0,
      mar: 0,
      category: "fruit",
    },
    {
      id: uuidv4(),

      img: "imgs/broccoli.png",
      title: "broccoli",
      price: 5.1,
      pad: 0,
      mar: 0,
      category: "vegetables",
    },
    {
      id: uuidv4(),

      img: "imgs/tilapia.png",
      title: "tilapia",
      price: 5.1,
      pad: 0,
      mar: 0,
      category: "seaFood",
    },
    {
      id: uuidv4(),

      img: "imgs/chicken-breast.png",
      title: "chicken-breast",
      price: 5.1,
      pad: 0,
      mar: 0,
      category: "dairy",
    },
    {
      id: uuidv4(),

      img: "imgs/fresh-fruits.png",
      title: "fresh fruits",
      price: 5.1,
      pad: 0,
      mar: 0,
      category: "fruit",
    },
    {
      id: uuidv4(),

      img: "imgs/dairy-banner.jpg",
      title: "dairy-banner",
      price: 5.1,
      pad: 0,
      mar: 0,
      category: "dairy",
    },
  ];

  let [readData] = useState(ProductList);

  return <Data.Provider value={readData}>{children}</Data.Provider>;
}

export { AllApiData, Data };
