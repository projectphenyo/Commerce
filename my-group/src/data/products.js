//src/data/products.js
import Watch from "../assets/images/Watch.png";
import Headphones from "../assets/images/Headphones.png";
import Iphone12Black from "../assets/images/Iphone-12-01.png";
import Iphone12Blue from "../assets/images/Iphone-12-02.png";
import Iphone12Red from "../assets/images/Iphone-12-03.png";
import Iphone13ProWhite from "../assets/images/Iphone-13-Pro-01.png";
import Iphone13ProRed from "../assets/images/Iphone-13-Pro-02.png";
import Iphone13ProGraphite from "../assets/images/Iphone-13-Pro-03.png";
const products = [
  {
    id: "1",
    name: "Apple Watch",
    variant: "Series 5 SE",
    price: 529.99,
    src: Watch,
    rating: 4.5,
  },
  {
    id: "2",
    name: "Sony ZX330BT",
    variant: "Light Grey",
    price: 39.99,
    src: Headphones,
    rating: 4.0,
  },
  {
    id: "3",
    name: "iPhone 12",
    variant: "Serious Black",
    price: 619.99,
    src: Iphone12Black,
    rating: 4.7,
  },
  {
    id: "4",
    name: "iPhone 12",
    variant: "Subway Blue",
    price: 619.99,
    src: Iphone12Blue,
    rating: 4.7,
  },
  {
    id: "5",
    name: "iPhone 12",
    variant: "Product RED",
    price: 619.99,
    src: Iphone12Red,
    rating: 4.7,
  },
  {
    id: "6",
    name: "iPhone 11",
    variant: "Milky White",
    price: 599.99,
    src: Iphone13ProWhite, // Replace with correct image if available
    rating: 4.3,
  },
  {
    id: "7",
    name: "iPhone 13 Pro",
    variant: "Product RED",
    price: 999.99,
    src: Iphone13ProRed,
    rating: 4.8,
  },
  {
    id: "8",
    name: "iPhone 13 Pro",
    variant: "Graphite",
    price: 999.99,
    src: Iphone13ProGraphite,
    rating: 4.8,
  },
];

export default products;
