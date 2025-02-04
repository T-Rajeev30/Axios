import express, { json } from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/api/products", (req, res) => {
  // It's an array

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 59.99,
      image_url: "https://example.com/images/wireless_headphones.jpg",
    },
    {
      id: 2,
      name: "Gaming Mouse",
      price: 29.99,
      image_url: "https://example.com/images/gaming_mouse.jpg",
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      price: 79.99,
      image_url: "https://example.com/images/mechanical_keyboard.jpg",
    },
    {
      id: 4,
      name: "Smartwatch",
      price: 99.99,
      image_url: "https://example.com/images/smartwatch.jpg",
    },
    {
      id: 5,
      name: "Portable Bluetooth Speaker",
      price: 49.99,
      image_url: "https://example.com/images/bluetooth_speaker.jpg",
    },
  ];

  if (req.query.search) {
    const filterProducts = products.filter((product) =>
      product.name.toLowerCase().includes(req.query.search.toLowerCase())
    );
    res.send(filterProducts);
    return;
  }
  setTimeout(() => {
    res.send(products);
  }, 3000);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
