import { atom, selector } from "recoil";

export const productState = atom({
  key: "productState",
  default: [
    {
      name: "Grapes",
      picture: "🍇",
      price: 481,
      type: "fruit",
      id: 1,
    },
    {
      name: "Melon",
      picture: "🍈",
      price: 426,
      type: "fruit",
      id: 2,
    },
    {
      name: "Watermelon",
      picture: "🍉",
      price: 362,
      type: "fruit",
      id: 3,
    },
    {
      name: "Tangerine",
      picture: "🍊",
      price: 162,
      type: "fruit",
      id: 4,
    },
    {
      name: "Lemon",
      picture: "🍋",
      price: 479,
      type: "fruit",
      id: 5,
    },
    {
      name: "Banana",
      picture: "🍌",
      price: 130,
      type: "fruit",
      id: 6,
    },
    {
      name: "Eggplant",
      picture: "🍆",
      price: 141,
      type: "vegetables",
      id: 7,
    },
    {
      name: "Potato",
      picture: "🥔",
      price: 182,
      type: "vegetables",
      id: 8,
    },
    {
      name: "Carrot",
      picture: "🥕",
      price: 499,
      type: "vegetables",
      id: 9,
    },
    {
      name: "Ear",
      picture: "🌽",
      price: 424,
      type: "vegetables",
      id: 10,
    },
    {
      name: "Hot",
      picture: "🌶",
      price: 207,
      type: "vegetables",
      id: 11,
    },
    {
      name: "Cucumber",
      picture: "🥒",
      price: 4,
      type: "vegetables",
      id: 12,
    },
    {
      name: "Bread",
      picture: "🍞",
      price: 116,
      type: "meals",
      id: 13,
    },
    {
      name: "Croissant",
      picture: "🥐",
      price: 103,
      type: "meals",
      id: 14,
    },
    {
      name: "Baguette",
      picture: "🥖",
      price: 258,
      type: "meals",
      id: 15,
    },
    {
      name: "Bagel",
      picture: "🥯",
      price: 497,
      type: "meals",
      id: 16,
    },
    {
      name: "Pancakes",
      picture: "🥞",
      price: 433,
      type: "meals",
      id: 17,
    },
    {
      name: "Waffle",
      picture: "🧇",
      price: 437,
      type: "meals",
      id: 18,
    },
    {
      name: "Bottle",
      picture: "🍾",
      price: 439,
      type: "beverages",
      id: 19,
    },
    {
      name: "Wine",
      picture: "🍷",
      price: 101,
      type: "beverages",
      id: 20,
    },
    {
      name: "Cocktail",
      picture: "🍸",
      price: 468,
      type: "beverages",
      id: 21,
    },
    {
      name: "Mojito",
      picture: "🍸",
      price: 468,
      type: "beverages",
      id: 22,
    },
    {
      name: "Beer",
      picture: "🍺",
      price: 128,
      type: "beverages",
      id: 23,
    },
    {
      name: "Beverage",
      picture: "🧃",
      price: 97,
      type: "beverages",
      id: 24,
    },
    {
      name: "Chopsticks",
      picture: "🥢",
      price: 376,
      type: "utensils",
      id: 25,
    },
    {
      name: "Fork",
      picture: "🍽",
      price: 494,
      type: "utensils",
      id: 26,
    },
    {
      name: "Fork",
      picture: "🍴",
      price: 75,
      type: "utensils",
      id: 27,
    },
    {
      name: "Spoon",
      picture: "🥄",
      price: 293,
      type: "utensils",
      id: 28,
    },
  ],
});

export const viewState = atom({
  key: "viewState",
  default: "column",
});

export const searchTextState = atom({
  key: "searchTextState",
  default: "",
});

export const productFilteredState = atom({
  key: "productFilteredState",
  default: "",
});

export const filteredProducts = selector({
  key: "filteredProducts",
  get: ({ get }) => {
    const products = get(productState);
    const searchText = get(searchTextState).toLowerCase();
    const filterItem = get(productFilteredState);
    let filteredProducts = [];
    filteredProducts = products
      .filter((product) => product.name.toLowerCase().includes(searchText))
      .filter((product) =>
        filterItem === "" ? true : product.type === filterItem
      );

    return filteredProducts;
  },
});

export const filteredCounts = selector({
  key: "filteredCounts",
  get: ({ get }) => {
    let filtredProductsCount = get(filteredProducts);
    return filtredProductsCount.length;
  },
});
