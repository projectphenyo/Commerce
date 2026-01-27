//src/data/products.js
import Watch from "../assets/images/Watch.png";
import Headphones from "../assets/images/Headphones.png";
import Iphone12Black from "../assets/images/Iphone-12-01.png";
import Iphone12Blue from "../assets/images/Iphone-12-02.png";
import Iphone12Red from "../assets/images/Iphone-12-03.png";
import MacBook from "../assets/images/MacBook.png";
import Iphone12White from "../assets/images/Iphone-12-04.png";
import DellLaptop from "../assets/images/Dell-XPS-15-Black.png";
import Iphone13Navy from "../assets/images/Iphone-12-Pro-02.png";
import DellWhiteLapwhite from "../assets/images/Dell-XPS-13-Black .png";
import Iphone13Pink from "../assets/images/Iphone-12-Pro-01.png";
import Iphone13ProSieryBlue from "../assets/images/Iphone-13-Pro-01.png";
import Iphone13ProJetBlack from "../assets/images/Iphone-13-Pro-02.png";
import SumsungNote21 from "../assets/images/Samsung-Note21.png"
import SumsungS21 from "../assets/images/Samsung-S21.png";
import SumsungS21Pro from "../assets/images/Samsung-S21-Pro.png";
import DellLaptopPro from "../assets/images/Dell-XPS-13-Black-Pro.png";


const products = [
  {
    id: "1",
    name: "Apple Watch",
    variant: "Series 5 SE",
    price: 529.99,
    src: Watch,
    rating: 4.5,
    miniDesciption: "The Apple Watch Series 5 SE is perfect for fitness tracking, notifications, and style.",
    fullDescription: "Experience the iconic Apple Watch design with a stunning Retina display and essential safety features like Fall Detection and Emergency SOS. Tracks your daily activity, heart rate, and workouts with seamless integration into the Apple ecosystem.",
  },
  {
    id: "2",
    name: "Sony ZX330BT",
    variant: "Light Grey",
    price: 39.99,
    src: Headphones,
    rating: 4.0,
    miniDesciption: "High-quality Sony Bluetooth headphones with long battery life and deep bass.",
    fullDescription: "Enjoy your favorite tracks without the wires. These Sony headphones feature 30mm driver units for clear, punchy sound and NFC one-touch pairing. Designed for comfort during long listening sessions with swivel-folding earcups for easy travel.",
  },
  {
    id: "3",
    name: "iPhone 12",
    variant: "Serious Black",
    price: 619.99,
    src: Iphone12Black,
    rating: 4.7,
    miniDesciption: "The dual-camera classic. Reliable, fast, and splash-resistant.",
    fullDesciption: "Features a 6.1-inch Liquid Retina HD display and the A13 Bionic chip. Capture stunning 4K video and Night Mode photos with the dual 12MP Ultra Wide and Wide cameras. All-day battery life meets a durable glass-and-aluminum design.",
  },
  {
    id: "4",
    name: "iPhone 11",
    variant: "Subway Blue",
    price: 619.99,
    src: Iphone12Blue,
    rating: 4.7,
    miniDesciption: "The dual-camera classic. Reliable, fast, and splash-resistant.",
    fullDesciption: "Features a 6.1-inch Liquid Retina HD display and the A13 Bionic chip. Capture stunning 4K video and Night Mode photos with the dual 12MP Ultra Wide and Wide cameras. All-day battery life meets a durable glass-and-aluminum design.",
  },
  {
    id: "5",
    name: "iPhone 11",
    variant: "Product RED",
    price: 619.99,
    src: Iphone12Red,
    rating: 4.7,
    miniDesciption: "The dual-camera classic. Reliable, fast, and splash-resistant.",
    fullDesciption: "Features a 6.1-inch Liquid Retina HD display and the A13 Bionic chip. Capture stunning 4K video and Night Mode photos with the dual 12MP Ultra Wide and Wide cameras. All-day battery life meets a durable glass-and-aluminum design.",
  },
  {
    id: "6",
    name: "iPhone 11",
    variant: "Milky White",
    price: 619.99,
    src: Iphone12White, 
    rating: 4.3,
    miniDesciption: "The dual-camera classic. Reliable, fast, and splash-resistant.",
    fullDesciption: "Features a 6.1-inch Liquid Retina HD display and the A13 Bionic chip. Capture stunning 4K video and Night Mode photos with the dual 12MP Ultra Wide and Wide cameras. All-day battery life meets a durable glass-and-aluminum design",
  },
  {
    id: "7",
    name: "iPhone 13",
    variant: "Product RED",
    price: 619.99,
    src: Iphone12Red,
    rating: 4.7,
    miniDesciption: "A total powerhouse with a massive leap in battery life.",
    fullDesciption: "Features the most advanced dual-camera system ever on an iPhone, boasting Sensor-shift optical image stabilization. Powered by the A15 Bionic chip for lightning-fast performance and improved power efficiency.",
  },
  {
    id: "8",
    name: "iPhone 12",
    variant: "Product RED",
    price: 619.99,
    src: Iphone12Red,
    rating: 4.5,
    miniDesciption: "Elevate your speed with 5G and a vibrant OLED display.",
    fullDesciption: "The first iPhone to feature Ceramic Shield and 5G speeds. Includes the A14 Bionic chip, MagSafe compatibility for easy charging, and a Super Retina XDR display for incredible color accuracy.",
  },
  {
    id: "9",
    name: "MacBook",
    variant: "Series 5 SE",
    price: 529.99,
    src: MacBook,
    rating: 4.5,
    miniDesciption: "Thin, light, and incredibly powerful for work and creativity.",
    fullDesciption: "Precision-engineered from recycled aluminum, the MacBook offers a stunning Retina display and the industry-leading Magic Keyboard. Whether you're editing video or drafting a proposal, the long-lasting battery and macOS ecosystem keep you productive all day.",
  },
  {
    id: "10",
    name: "Dell ",
    variant: "XPS 15 Black",
    price: 499.99,
    src: DellLaptop,
    rating: 4.8,
    miniDesciption: "The gold standard of Windows laptops. Bezel-less beauty and raw power.",
    fullDesciption: "The XPS line features the iconic InfinityEdge display for an immersive viewing experience. Built with premium materials like machined aluminum and carbon fiber, these machines house high-performance Intel processors to handle everything from heavy multitasking to creative professional suites.",
  },
  {
    id: "11",
    name: "iPhone 13",
    variant: "Navy",
    price: 609.99,
    src: Iphone13Navy,
    rating: 4.2,
    miniDesciption: "Pro-grade photography meets a 120Hz ProMotion display.",
    fullDesciption: "The Pro camera system gets its biggest advancement ever with Macro photography and ProRes video. The 6.1-inch Super Retina XDR display with ProMotion makes every scroll feel butter-smooth.",
  },
   {
    id: "12",
    name: "Dell ",
    variant: "XPS 13",
    price: 1799.99,
    src: DellWhiteLapwhite,
    rating: 3.5,
    miniDesciption: "The gold standard of Windows laptops. Bezel-less beauty and raw power.",
    fullDesciption: "The XPS line features the iconic InfinityEdge display for an immersive viewing experience. Built with premium materials like machined aluminum and carbon fiber, these machines house high-performance Intel processors to handle everything from heavy multitasking to creative professional suites.",
  },
  {
    id: "13",
    name: "iPhone 13",
    variant: "Pink",
    price: 562.99,
    src: Iphone13Pink,
    rating: 4.2,
    miniDesciption: "Pro-grade photography meets a 120Hz ProMotion display.",
    fullDesciption: "The Pro camera system gets its biggest advancement ever with Macro photography and ProRes video. The 6.1-inch Super Retina XDR display with ProMotion makes every scroll feel butter-smooth.",
  },
  {
    id: "14",
    name: "iPhone 13 Pro",
    variant: "Sierra Blue",
    price: 649.99,
    src: Iphone13ProSieryBlue,
    rating: 4.6,
    miniDesciption: "Pro-grade photography meets a 120Hz ProMotion display.",
    fullDesciption: "The Pro camera system gets its biggest advancement ever with Macro photography and ProRes video. The 6.1-inch Super Retina XDR display with ProMotion makes every scroll feel butter-smooth.",
  },
  {
    id: "15",
    name: "Samsung Galaxy Note 20 Ultra",
    variant: "Rose Gold",
    price: 399.99,
    src: SumsungNote21,
    rating: 4.5,
    miniDesciption:"The ultimate power-user phone with the iconic S-Pen.",
    fullDesciption: "A computer in your pocket. Featuring a 6.9-inch Dynamic AMOLED 2X display and a versatile S-Pen with ultra-low latency. Capture pro-grade 8K video and enjoy a seamless work-from-anywhere experience.",
  },
  {
    id: "16",
    name: "iPhone 13 Pro Max",
    variant: "JetBlack",
    price: 649.99,
    src: Iphone13ProJetBlack,
    rating: 4.0,
    miniDesciption: "The ultimate iPhone experience with the largest display.",
    fullDesciption: "For those who want it all. A massive 6.7-inch display, professional triple-camera array, and the longest battery life in the 13-series lineup. Finished in a sleek, premium Jet Black glass.",
  },
  {
    id: "17",
    name: "Samsung Galaxy S21",
    variant: "Milky Way",
    price: 449.99,
    src: SumsungS21,
    rating: 3.0,
    miniDescription: "Iconic 'contour-cut' camera design and cinematic 8K video.",
    fullDesciption: "Designed to be a revolution in video and photography. With its high-resolution 108MP sensor (Ultra) and 120Hz adaptive display, the S21 series provides a flagship Android experience with blazing-fast 5G connectivity and a bold, modern aesthetic.",
  },
  {
    id: "18",
    name: "Samsung Galaxy S21 Ultra",
    variant: "Charcoal black",
    price: 529.99,
    src: SumsungS21Pro,
    rating: 4.9,
    miniDescription: "Iconic 'contour-cut' camera design and cinematic 8K video.",
    fullDescription: "Designed to be a revolution in video and photography. With its high-resolution 108MP sensor (Ultra) and 120Hz adaptive display, the S21 series provides a flagship Android experience with blazing-fast 5G connectivity and a bold, modern aesthetic.",
  },
  {
    id: "19",
    name: "Dell",
    variant: "XPS 13 Pro",
    price: 949.99,
    src: DellLaptopPro,
    rating: 3.8,
    miniDescription: "The gold standard of Windows laptops. Bezel-less beauty and raw power.",
    fullDescription: "The XPS line features the iconic InfinityEdge display for an immersive viewing experience. Built with premium materials like machined aluminum and carbon fiber, these machines house high-performance Intel processors to handle everything from heavy multitasking to creative professional suites.",
  },
  
];

export default products;
