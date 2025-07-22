# 🚀 CryptoPlace — ReactJS Crypto Tracker

Welcome to **CryptoPlace**, a sleek, responsive cryptocurrency tracker built with **ReactJS + Vite**.  
Search, sort, and explore real-time coin data fetched directly from the CoinGecko API.  
Includes user authentication using `localStorage`.

![CryptoPlace Screenshot](./src/assets/screenshot.png) 

---


## 🧠 Features

✅ Real-time crypto market data  
✅ Sort by Rank, Price, Market Cap  
✅ Search any coin by name  
✅ Pagination (10 coins per page)  
✅ Login & Signup using localStorage  
✅ Responsive design  
✅ Clean, readable UI

---

## 📸 Screenshots

| Home Page | Coin Page |
|-----------|-----------|
| ![Home](./src/assets/home.png) | ![Coin](./src/assets/coin.png) |

> Add screenshots under `/src/assets/` and update paths if needed.

---

## ⚙️ Tech Stack

- ⚛️ ReactJS
- ⚡ Vite
- 🌐 CoinGecko API
- 🧠 Context API (for global state)
- 🎨 CSS
- 💾 localStorage (for auth)

---

## 📂 Folder Structure

```bash
cryptoplace/
├── public/
├── src/
│   ├── assets/          # Images, logos, screenshots
│   ├── components/      # Navbar, Footer
│   ├── context/         # CoinContext.js (global state)
│   ├── pages/           # Home, Coin, Blog, Features, Pricing, Signup
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── README.md
```

1. Clone the repository
git clone https://github.com/jai72-byte/CryptoPlace-using-ReactJS.git
cd CryptoPlace-using-ReactJS

2. Install dependencies
npm install

3.Run the development server
npm run dev



**Authentication (Demo)**
Signup form collects name, email, password
Stores data in localStorage
Login validates against localStorage


 **API Used**
[🔗 CoinGecko Public API](https://www.coingecko.com/en/api)


**Author**
Made  by [Jai Rakesh](https://github.com/jai72-byte)






