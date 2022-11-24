module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screen: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "chipo-heading": "white",
        "chipo-blue": "#0084ff",
        "chipo-text": "white",
        "chipo-bg-second": "#f8fbfd",
        "chipo-gray-blur": "#eee",
        "chipo-orange": "#f62",
      },
      backgroundImage: {
        "home-bg": "url('/images/home/background.webp')",
        "hero-shop":
          "url('https://res.cloudinary.com/duv7awivc/image/upload/v1668759173/shop/bg-shop_bhtavi_kgaeel.webp')",
      },
    },
  },
  plugins: [],
};
