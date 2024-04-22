import { createStore } from 'redux';


const initialState = {
  products: [
    {
      id: 1,
      name: "Coca-Cola",
      price: 600.00,
      category: "Напитки",
      type: "Газированный напиток",
      image:"/image/coca-cola.jpg"
    },
    {
      id: 2,
      name: "Sprite",
      price: 600.00,
      category: "Напитки",
      type: "Газированный напиток",
      image: "/image/sprite.jpeg"
    },
    {
      id: 3,
      name: "Bonaqua",
      price: 500.00,
      category: "Напитки",
      type: "Вода",
      image:"/image/bonaqua.png"
    },
    {
      id: 4,
      name: "Snickers",
      price: 550.00,
      category: "Снеки",
      type: "Шоколадный батончик",
      image:"/image/snickers.png"
    },
    {
      id: 5,
      name: "Twix",
      price: 550.00,
      category: "Снеки",
      type: "Шоколадный батончик", 
      image:"/image/twix.jpg"
    },
    {
      id: 6,
      name: "Mars",
      price: 550.00,
      category: "Снеки",
      type: "Шоколадный батончик",
      image:"/image/mars.jpg"
    },
    {
      id: 7,
      name: "Клаб-сендвич с лососем",
      price: 950.00,
      category: "Сендвич",
      type: "Клаб-сендвич",
      image:"/image/sandwich.jpg"
    },
    {
      id: 8,
      name: "Мясо по- французски с рисом",
      price: 1350.00,
      category: "Комплексные обеды",
      type: "Второе блюдо",
      image:"/image/french meat and rise.webp"
    }
  ],
  modalOpen: false,
}

export const openCartModal = () => ({ type: 'OPEN_CART_MODAL' });
export const closeCartModal = () => ({ type: 'CLOSE_CART_MODAL' });


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_CART_MODAL':
      return { ...state, modalOpen: true };
    case 'CLOSE_CART_MODAL':
      return { ...state, modalOpen: false };
    default:
      return state;
  }
};


const store = createStore(rootReducer);

export default store;




