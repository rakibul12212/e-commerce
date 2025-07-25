export const products = [
  {
    id: 1,
    name: "Men's Slim Fit Shirt",
    shortDescription:
      "A stylish, slim-fit cotton shirt perfect for casual and semi-formal occasions.",
    description: "Stylish slim fit cotton shirt for men.",
    longDescription:
      "Elevate your wardrobe with this Men's Slim Fit Shirt, designed for a sleek and modern silhouette. Crafted from a premium blend of cotton, polyester, and spandex, this shirt offers exceptional comfort, breathability, and a touch of stretch for ease of movement. Its tailored fit accentuates the body’s contours, making it ideal for both professional settings and casual outings. Available in versatile colors like Blue, White, and Grey, this shirt features a classic collar and button-down front, ensuring timeless style. The durable fabric resists wrinkling, maintaining a polished look throughout the day. Perfect for pairing with chinos or jeans, this shirt is a must-have for the modern man seeking sophistication and practicality.",
    price: 1500,
    discount: 15, // Increased from 10% to 15%
    discountedPrice: 1275.0, // 1500 * (1 - 15/100) = 1275.00
    category: "mens fashion",
    subCategory: "shirts",
    isNewArrival: false,
    hasDiscount: true,
    flashSale: false,
    stockQuantity: 5,
    materials: ["Cotton", "Polyester", "Spandex"],
    images: {
      primary: "https://i.ibb.co/B2TRtrZP/noimage.png",
      detail: [
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
      ],
    },
    variants: [
      { size: "S", color: "Blue", stock: 15 },
      { size: "M", color: "Blue", stock: 12 },
      { size: "L", color: "White", stock: 10 },
      { size: "XL", color: "White", stock: 8 },
      { size: "2XL", color: "Grey", stock: 6 },
    ],
  },
  {
    id: 2,
    name: "Womens Floral Dress",
    shortDescription:
      "A vibrant summer dress with a floral print, perfect for warm days.",
    description: "Summer floral print dress.",
    longDescription:
      "Embrace the warmth of summer with this Womens Floral Dress, a perfect blend of style and comfort. Made from a lightweight mix of polyester, cotton, and viscose, this dress offers a soft, breathable feel ideal for sunny days. The vibrant floral print adds a touch of elegance, making it suitable for picnics, beach outings, or casual gatherings with friends. Its flowing design provides a flattering fit for various body types, with a cinched waist for subtle definition. Available in striking Red, Blue, and Grey hues, this dress is easy to accessorize with sandals or heels. The durable fabric ensures easy care and long-lasting wear, making it a versatile addition to any summer wardrobe.",
    price: 1800,
    discount: 0, // No change, as hasDiscount: false
    discountedPrice: 1800.0, // No discount applied
    category: "womens fashion",
    subCategory: "dresses",
    isNewArrival: false,
    hasDiscount: false,
    flashSale: false,
    stockQuantity: 0,
    materials: ["Polyester", "Cotton", "Viscose"],
    images: {
      primary: "https://i.ibb.co/B2TRtrZP/noimage.png",
      detail: [
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
      ],
    },
    variants: [
      { size: "S", color: "Red", stock: 15 },
      { size: "M", color: "Red", stock: 12 },
      { size: "L", color: "Blue", stock: 10 },
      { size: "XL", color: "Blue", stock: 8 },
      { size: "2XL", color: "Grey", stock: 6 },
    ],
  },
  {
    id: 3,
    name: "Men's Casual Jacket",
    shortDescription:
      "A lightweight, versatile jacket for everyday casual wear.",
    description: "Lightweight jacket for everyday wear.",
    longDescription:
      "Stay stylish and comfortable with this Men's Casual Jacket, designed for versatility and everyday wear. Constructed from a blend of polyester, cotton, and nylon, this jacket is lightweight yet durable, offering protection against light wind and rain. Its minimalist design features a sleek zipper and practical side pockets, making it perfect for casual outings, commuting, or layering in cooler weather. Available in Black, Green, and Grey, this jacket complements a wide range of outfits, from jeans to chinos. The breathable fabric ensures comfort during extended wear, while the sturdy construction guarantees long-lasting use. Ideal for the modern man on the go, this jacket combines functionality with a timeless aesthetic.",
    price: 2500,
    discount: 20, // Increased from 15% to 20%
    discountedPrice: 2000.0, // 2500 * (1 - 20/100) = 2000.00
    category: "mens fashion",
    subCategory: "jackets",
    isNewArrival: false,
    hasDiscount: true,
    flashSale: true,
    stockQuantity: 2,
    materials: ["Polyester", "Cotton", "Nylon"],
    images: {
      primary: "https://i.ibb.co/B2TRtrZP/noimage.png",
      detail: [
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
      ],
    },
    variants: [
      { size: "S", color: "Black", stock: 15 },
      { size: "M", color: "Black", stock: 12 },
      { size: "L", color: "Green", stock: 10 },
      { size: "XL", color: "Green", stock: 8 },
      { size: "2XL", color: "Grey", stock: 6 },
    ],
  },
  {
    id: 4,
    name: "Womens High-Waist Jeans",
    shortDescription:
      "Comfortable and flattering high-waist denim jeans for women.",
    description: "Comfortable high-waist denim jeans.",
    longDescription:
      "These Womens High-Waist Jeans offer the perfect combination of comfort and style for any wardrobe. Made from a blend of cotton denim, spandex, and polyester, these jeans provide a soft, stretchy fit that hugs the body while allowing freedom of movement. The high-waist design accentuates the waistline, creating a flattering silhouette suitable for casual or semi-formal occasions. Available in Blue, Black, and Grey, these jeans feature a classic five-pocket style and a durable zipper, ensuring both functionality and fashion. Pair them with a blouse or casual tee for a versatile look. The high-quality denim resists fading and wear, making these jeans a reliable choice for everyday wear.",
    price: 2000,
    discount: 13, // Increased from 8% to 13%
    discountedPrice: 1740.0, // 2000 * (1 - 13/100) = 1740.00
    category: "womens fashion",
    subCategory: "jeans",
    isNewArrival: false,
    hasDiscount: true,
    flashSale: false,
    stockQuantity: 20,
    materials: ["Cotton (Denim)", "Spandex", "Polyester"],
    images: {
      primary: "https://i.ibb.co/B2TRtrZP/noimage.png",
      detail: [
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
      ],
    },
    variants: [
      { size: "S", color: "Blue", stock: 15 },
      { size: "M", color: "Blue", stock: 12 },
      { size: "L", color: "Black", stock: 10 },
      { size: "XL", color: "Black", stock: 8 },
      { size: "2XL", color: "Grey", stock: 6 },
    ],
  },
  {
    id: 5,
    name: "Men's Sneakers",
    shortDescription:
      "Durable, stylish sneakers ideal for casual and active lifestyles.",
    description: "Durable and stylish sneakers for men.",
    longDescription:
      "Step up your footwear game with these Men's Sneakers, crafted for both style and durability. Made from a combination of leather, rubber, mesh, and EVA foam, these sneakers offer superior comfort, breathability, and support for all-day wear. The sleek design, available in White, Black, and Grey, makes them versatile for casual outings, gym sessions, or urban adventures. The cushioned EVA foam sole provides excellent shock absorption, while the rubber outsole ensures reliable traction on various surfaces. With a breathable mesh upper and sturdy leather accents, these sneakers are built to withstand daily wear while maintaining a modern aesthetic. Perfect for pairing with jeans or shorts, these sneakers are a must-have for any active man.",
    price: 2200,
    discount: 0, // No change, as hasDiscount: false
    discountedPrice: 2200.0, // No discount applied
    category: "mens fashion",
    subCategory: "footwear",
    isNewArrival: false,
    hasDiscount: false,
    flashSale: false,
    stockQuantity: 60,
    materials: ["Leather", "Rubber", "Mesh", "EVA Foam"],
    images: {
      primary: "https://i.ibb.co/B2TRtrZP/noimage.png",
      detail: [
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
      ],
    },
    variants: [
      { size: "S", color: "White", stock: 15 },
      { size: "M", color: "White", stock: 12 },
      { size: "L", color: "Black", stock: 10 },
      { size: "XL", color: "Grey", stock: 8 },
      { size: "2XL", color: "Grey", stock: 6 },
    ],
  },
  {
    id: 6,
    name: "Womens Leather Handbag",
    shortDescription: "An elegant leather handbag for daily sophistication.",
    description: "Elegant leather handbag for daily use.",
    longDescription:
      "Add a touch of luxury to your daily essentials with this Womens Leather Handbag. Crafted from premium leather with a polyester lining and sturdy metal hardware, this handbag combines durability with timeless elegance. Its spacious interior offers ample room for essentials like a wallet, phone, and makeup, while additional compartments ensure organized storage. Available in Brown, Black, and Grey, the bag features a sleek design with a secure zipper closure and comfortable handles, making it ideal for work, travel, or casual outings. The high-quality leather is resistant to wear and easy to clean, ensuring long-lasting beauty. Perfect for the modern woman, this handbag effortlessly elevates any outfit, from casual jeans to professional attire.",
    price: 3000,
    discount: 25, // Increased from 20% to 25%
    discountedPrice: 2250.0, // 3000 * (1 - 25/100) = 2250.00
    category: "womens fashion",
    subCategory: "accessories",
    isNewArrival: false,
    hasDiscount: true,
    flashSale: true,
    stockQuantity: 75,
    materials: ["Leather", "Polyester (lining)", "Metal (hardware)"],
    images: {
      primary: "https://i.ibb.co/B2TRtrZP/noimage.png",
      detail: [
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
      ],
    },
    variants: [
      { size: "S", color: "Brown", stock: 15 },
      { size: "M", color: "Brown", stock: 12 },
      { size: "L", color: "Black", stock: 10 },
      { size: "XL", color: "Black", stock: 8 },
      { size: "2XL", color: "Grey", stock: 6 },
    ],
  },
  {
    id: 7,
    name: "Men's Polo T-Shirt",
    shortDescription: "A breathable cotton polo t-shirt for casual comfort.",
    description: "Breathable cotton polo t-shirt.",
    longDescription:
      "This Men's Polo T-Shirt is a wardrobe essential, offering a perfect blend of comfort and classic style. Made from a soft mix of cotton, polyester, and elastane, it provides breathability and a slight stretch for all-day comfort. The iconic polo collar and buttoned neckline create a polished look suitable for casual outings, office settings, or weekend gatherings. Available in vibrant Red, Blue, White, and Grey, this t-shirt pairs effortlessly with jeans, chinos, or shorts. The durable fabric resists shrinking and fading, ensuring it remains a staple in your wardrobe. Ideal for men who value versatility and quality, this polo t-shirt delivers timeless appeal with modern functionality.",
    price: 1200,
    discount: 10, // Increased from 5% to 10%
    discountedPrice: 1080.0, // 1200 * (1 - 10/100) = 1080.00
    category: "mens fashion",
    subCategory: "shirts",
    isNewArrival: false,
    hasDiscount: true,
    flashSale: false,
    stockQuantity: 50,
    materials: ["Cotton", "Polyester", "Elastane"],
    images: {
      primary: "https://i.ibb.co/B2TRtrZP/noimage.png",
      detail: [
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
      ],
    },
    variants: [
      { size: "S", color: "Red", stock: 15 },
      { size: "M", color: "Red", stock: 12 },
      { size: "L", color: "Blue", stock: 10 },
      { size: "XL", color: "White", stock: 8 },
      { size: "2XL", color: "Grey", stock: 6 },
    ],
  },
  {
    id: 8,
    name: "Womens Sandals",
    shortDescription: "Comfortable open-toe sandals for stylish summer wear.",
    description: "Comfortable open-toe sandals.",
    longDescription:
      "Step into summer with these Womens Sandals, designed for both comfort and style. Crafted from premium leather, rubber, cork, and synthetic lining, these open-toe sandals offer a supportive fit and breathable design ideal for warm weather. Available in Beige, Black, White, and Grey, they feature a cushioned cork footbed for all-day comfort and a durable rubber sole for reliable traction. The minimalist yet chic design makes them perfect for casual outings, beach trips, or pairing with dresses and jeans. Easy to slip on and off, these sandals are a versatile addition to any wardrobe, combining durability with a fashionable aesthetic that complements any summer look.",
    price: 1600,
    discount: 15, // Increased from 10% to 15%
    discountedPrice: 1360.0, // 1600 * (1 - 15/100) = 1360.00
    category: "womens fashion",
    subCategory: "footwear",
    isNewArrival: false,
    hasDiscount: true,
    flashSale: true,
    stockQuantity: 100,
    materials: ["Leather", "Rubber", "Cork", "Synthetic Lining"],
    images: {
      primary: "https://i.ibb.co/B2TRtrZP/noimage.png",
      detail: [
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
      ],
    },
    variants: [
      { size: "S", color: "Beige", stock: 15 },
      { size: "M", color: "Beige", stock: 12 },
      { size: "L", color: "Black", stock: 10 },
      { size: "XL", color: "White", stock: 8 },
      { size: "2XL", color: "Grey", stock: 6 },
    ],
  },
  {
    id: 9,
    name: "Men's Formal Shoes",
    shortDescription:
      "Polished leather shoes for sophisticated formal occasions.",
    description: "Polished leather shoes for formal occasions.",
    longDescription:
      "Make a lasting impression with these Men's Formal Shoes, crafted for elegance and durability. Made from high-quality leather with a rubber sole and synthetic lining, these shoes offer a refined look with exceptional comfort. Available in Black, Brown, and Grey, they feature a sleek, polished finish that complements suits and formal attire. The cushioned insole provides support for extended wear, while the durable rubber outsole ensures reliable traction. Perfect for weddings, business meetings, or formal events, these shoes combine timeless design with modern craftsmanship. Their easy-to-clean leather surface and sturdy construction make them a long-lasting investment for any gentleman’s wardrobe.",
    price: 3500,
    discount: 0, // No change, as hasDiscount: false
    discountedPrice: 3500.0, // No discount applied
    category: "mens fashion",
    subCategory: "footwear",
    isNewArrival: false,
    hasDiscount: false,
    flashSale: false,
    stockQuantity: 20,
    materials: ["Leather", "Rubber", "Synthetic Lining"],
    images: {
      primary: "https://i.ibb.co/B2TRtrZP/noimage.png",
      detail: [
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
      ],
    },
    variants: [
      { size: "S", color: "Black", stock: 15 },
      { size: "M", color: "Black", stock: 12 },
      { size: "L", color: "Brown", stock: 10 },
      { size: "XL", color: "Brown", stock: 8 },
      { size: "2XL", color: "Grey", stock: 6 },
    ],
  },
  {
    id: 10,
    name: "Womens Winter Coat",
    shortDescription: "A warm, stylish winter coat for cold-weather elegance.",
    description: "Warm and stylish winter coat.",
    longDescription:
      "Stay cozy and chic with this Womens Winter Coat, designed to keep you warm without sacrificing style. Crafted from a blend of wool, polyester, nylon, and a soft cotton lining, this coat offers superior insulation and comfort in cold weather. Available in Navy, Grey, and Black, its tailored fit and elegant design make it perfect for both professional and casual settings. The coat features a high collar and secure buttons for added warmth, along with spacious pockets for practicality. Ideal for winter commutes, outdoor events, or evening outings, this durable coat resists wear and tear while maintaining a sophisticated look. Pair it with scarves or boots for a complete winter ensemble.",
    price: 4000,
    discount: 0, // No change, as hasDiscount: false
    discountedPrice: 4000.0, // No discount applied
    category: "womens fashion",
    subCategory: "outerwear",
    isNewArrival: false,
    hasDiscount: false,
    flashSale: false,
    stockQuantity: 25,
    materials: ["Wool", "Polyester", "Nylon", "Cotton (lining)"],
    images: {
      primary: "https://i.ibb.co/B2TRtrZP/noimage.png",
      detail: [
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
      ],
    },
    variants: [
      { size: "S", color: "Navy", stock: 15 },
      { size: "M", color: "Navy", stock: 12 },
      { size: "L", color: "Grey", stock: 10 },
      { size: "XL", color: "Black", stock: 8 },
      { size: "2XL", color: "Black", stock: 6 },
    ],
  },
  {
    id: 11,
    name: "Men's Sports Shorts",
    shortDescription: "Lightweight shorts for sports and casual comfort.",
    description: "Lightweight shorts for sports and casual wear.",
    longDescription:
      "These Men's Sports Shorts are designed for active lifestyles, offering lightweight comfort and flexibility. Made from a blend of polyester, spandex, and nylon, they provide excellent breathability and stretch, making them ideal for workouts, sports, or casual wear. Available in Black, Grey, and Blue, these shorts feature an elastic waistband with a drawstring for a secure fit and side pockets for convenience. The moisture-wicking fabric keeps you dry during intense activities, while the durable construction ensures long-lasting performance. Perfect for the gym, running, or lounging at home, these shorts combine functionality with a modern, streamlined design that suits any active man’s wardrobe.",
    price: 900,
    discount: 10, // Increased from 5% to 10%
    discountedPrice: 810.0, // 900 * (1 - 10/100) = 810.00
    category: "mens fashion",
    subCategory: "shorts",
    isNewArrival: true,
    hasDiscount: true,
    flashSale: true,
    stockQuantity: 15,
    materials: ["Polyester", "Spandex", "Nylon"],
    images: {
      primary: "https://i.ibb.co/B2TRtrZP/noimage.png",
      detail: [
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
      ],
    },
    variants: [
      { size: "S", color: "Black", stock: 15 },
      { size: "M", color: "Black", stock: 12 },
      { size: "L", color: "Grey", stock: 10 },
      { size: "XL", color: "Blue", stock: 8 },
      { size: "2XL", color: "Blue", stock: 6 },
    ],
  },
  {
    id: 12,
    name: "Womens Sunglasses",
    shortDescription:
      "Trendy sunglasses with UV protection for stylish eye safety.",
    description: "Trendy sunglasses with UV protection.",
    longDescription:
      "Protect your eyes in style with these Womens Sunglasses, designed for both fashion and function. Featuring polycarbonate lenses, a metal frame, and plastic temples, these sunglasses offer 100% UV protection to shield your eyes from harmful rays. Available in Black, Brown, and Grey, their sleek, modern design complements any outfit, from casual to formal. The lightweight construction ensures all-day comfort, while the durable materials resist scratches and wear. Perfect for driving, beach trips, or everyday wear, these sunglasses add a touch of sophistication to your look while prioritizing eye safety. Pair them with your favorite summer dress or professional attire for a polished appearance.",
    price: 1200,
    discount: 15, // Increased from 10% to 15%
    discountedPrice: 1020.0, // 1200 * (1 - 15/100) = 1020.00
    category: "womens fashion",
    subCategory: "accessories",
    isNewArrival: true,
    hasDiscount: true,
    flashSale: true,
    stockQuantity: 5,
    materials: ["Polycarbonate (lenses)", "Metal (frame)", "Plastic (temples)"],
    images: {
      primary: "https://i.ibb.co/B2TRtrZP/noimage.png",
      detail: [
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
      ],
    },
    variants: [
      { size: "S", color: "Black", stock: 15 },
      { size: "M", color: "Black", stock: 12 },
      { size: "L", color: "Brown", stock: 10 },
      { size: "XL", color: "Brown", stock: 8 },
      { size: "2XL", color: "Grey", stock: 6 },
    ],
  },
  {
    id: 13,
    name: "Men's Hoodie",
    shortDescription: "A cozy cotton hoodie for casual warmth and style.",
    description: "Cozy cotton hoodie for casual wear.",
    longDescription:
      "Stay warm and stylish with this Men's Hoodie, perfect for casual comfort. Made from a soft blend of cotton, polyester, and fleece, this hoodie offers exceptional warmth and a cozy feel, ideal for cooler days. Available in Grey, Black, and Navy, it features a drawstring hood, kangaroo pocket, and ribbed cuffs for a snug fit. The relaxed design makes it perfect for lounging, casual outings, or layering with jackets. Its durable fabric resists pilling and fading, ensuring long-lasting quality. Pair it with jeans or joggers for a laid-back yet fashionable look that suits any casual occasion.",
    price: 1800,
    discount: 0, // No change, as hasDiscount: false
    discountedPrice: 1800.0, // No discount applied
    category: "mens fashion",
    subCategory: "sweaters",
    isNewArrival: true,
    hasDiscount: false,
    flashSale: false,
    stockQuantity: 151,
    materials: ["Cotton", "Polyester", "Fleece"],
    images: {
      primary: "https://i.ibb.co/B2TRtrZP/noimage.png",
      detail: [
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
      ],
    },
    variants: [
      { size: "S", color: "Grey", stock: 15 },
      { size: "M", color: "Grey", stock: 12 },
      { size: "L", color: "Black", stock: 10 },
      { size: "XL", color: "Navy", stock: 8 },
      { size: "2XL", color: "Navy", stock: 6 },
    ],
  },
  {
    id: 14,
    name: "Womens Skirt",
    shortDescription: "An elegant midi skirt for versatile styling.",
    description: "Elegant midi skirt for all occasions.",
    longDescription:
      "This Womens Skirt is a versatile addition to any wardrobe, offering elegance and adaptability for various occasions. Crafted from a blend of polyester, viscose, and spandex, this midi skirt provides a comfortable, stretchy fit with a smooth, flowing silhouette. Available in Black, White, Red, and Grey, its medium length makes it suitable for both professional settings and casual outings. The sleek design pairs effortlessly with blouses, sweaters, or casual tops, allowing for endless styling possibilities. The durable fabric resists wrinkling and fading, ensuring a polished look with minimal maintenance. Perfect for work, dinners, or social events, this skirt combines timeless style with modern comfort for the contemporary woman.",
    price: 1400,
    discount: 13, // Increased from 8% to 13%
    discountedPrice: 1218.0, // 1400 * (1 - 13/100) = 1218.00
    category: "womens fashion",
    subCategory: "skirts",
    isNewArrival: true,
    hasDiscount: true,
    flashSale: true,
    stockQuantity: 7,
    materials: ["Polyester", "Viscose", "Spandex"],
    images: {
      primary: "https://i.ibb.co/B2TRtrZP/noimage.png",
      detail: [
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
      ],
    },
    variants: [
      { size: "S", color: "Black", stock: 15 },
      { size: "M", color: "Black", stock: 12 },
      { size: "L", color: "White", stock: 10 },
      { size: "XL", color: "Red", stock: 8 },
      { size: "2XL", color: "Grey", stock: 6 },
    ],
  },
  {
    id: 15,
    name: "Men's Belt",
    shortDescription: "A classic leather belt for timeless style.",
    description: "Classic leather belt for men.",
    longDescription:
      "Complete your outfit with this Men's Belt, a timeless accessory designed for both style and durability. Crafted from premium leather with a sturdy metal buckle and nylon stitching, this belt offers a polished look that complements both formal and casual attire. Available in Black, Brown, and Grey, its sleek design and adjustable fit make it suitable for everyday wear, from business meetings to casual outings. The high-quality leather resists wear and cracking, ensuring long-lasting use, while the minimalist buckle adds a touch of sophistication. Pair it with chinos, jeans, or dress pants for a versatile accessory that elevates any wardrobe.",
    price: 800,
    discount: 10, // Increased from 5% to 10%
    discountedPrice: 720.0, // 800 * (1 - 10/100) = 720.00
    category: "mens fashion",
    subCategory: "accessories",
    isNewArrival: true,
    hasDiscount: true,
    flashSale: false,
    stockQuantity: 0,
    materials: ["Leather", "Metal (buckle)", "Nylon (stitching)"],
    images: {
      primary: "https://i.ibb.co/B2TRtrZP/noimage.png",
      detail: [
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
      ],
    },
    variants: [
      { size: "S", color: "Black", stock: 15 },
      { size: "M", color: "Black", stock: 12 },
      { size: "L", color: "Brown", stock: 10 },
      { size: "XL", color: "Brown", stock: 8 },
      { size: "2XL", color: "Grey", stock: 6 },
    ],
  },
  {
    id: 16,
    name: "Womens Scarf",
    shortDescription: "A soft, stylish scarf for versatile accessorizing.",
    description: "Soft and stylish scarf for women.",
    longDescription:
      "Enhance your outfit with this Womens Scarf, a soft and stylish accessory perfect for any season. Made from a blend of cotton, polyester, and viscose, this scarf offers a lightweight, comfortable feel that drapes beautifully. Available in Blue, Red, and Grey, its versatile design complements both casual and formal looks, from cozy sweaters to elegant coats. The breathable fabric is gentle on the skin, making it ideal for all-day wear, while the vibrant colors add a pop of style to any ensemble. Perfect for layering in cooler weather or adding flair to a summer outfit, this scarf is a must-have accessory for the fashion-forward woman.",
    price: 600,
    discount: 10, // Increased from 5% to 10%
    discountedPrice: 540.0, // 600 * (1 - 10/100) = 540.00
    category: "womens fashion",
    subCategory: "accessories",
    isNewArrival: true,
    hasDiscount: true,
    flashSale: false,
    stockQuantity: 51,
    materials: ["Cotton", "Polyester", "Viscose"],
    images: {
      primary: "https://i.ibb.co/B2TRtrZP/noimage.png",
      detail: [
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
      ],
    },
    variants: [
      { size: "S", color: "Blue", stock: 15 },
      { size: "M", color: "Blue", stock: 12 },
      { size: "L", color: "Red", stock: 10 },
      { size: "XL", color: "Red", stock: 8 },
      { size: "2XL", color: "Grey", stock: 6 },
    ],
  },
  {
    id: 17,
    name: "Men's Watch",
    shortDescription:
      "A sleek analog watch with a leather strap for timeless elegance.",
    description: "Sleek analog watch with leather strap.",
    longDescription:
      "Elevate your style with this Men's Watch, a sophisticated timepiece designed for timeless elegance. Featuring a premium leather strap, a stainless steel case, a glass crystal, and a reliable quartz movement, this watch combines durability with refined aesthetics. Available in Black, Silver, and Grey, its minimalist design and clear dial make it suitable for both formal and casual occasions. The soft leather strap ensures comfort for all-day wear, while the scratch-resistant glass crystal protects the watch face. Perfect for business meetings, special events, or everyday wear, this watch adds a touch of class to any outfit. Its robust construction and precise timekeeping make it a reliable and stylish addition to any modern man’s collection.",
    price: 2500,
    discount: 15, // Increased from 10% to 15%
    discountedPrice: 2125.0, // 2500 * (1 - 15/100) = 2125.00
    category: "mens fashion",
    subCategory: "accessories",
    isNewArrival: true,
    hasDiscount: true,
    flashSale: true,
    stockQuantity: 20,
    materials: [
      "Leather (strap)",
      "Stainless Steel (case)",
      "Glass (crystal)",
      "Quartz",
    ],
    images: {
      primary: "https://i.ibb.co/B2TRtrZP/noimage.png",
      detail: [
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
      ],
    },
    variants: [
      { size: "S", color: "Black", stock: 15 },
      { size: "M", color: "Black", stock: 12 },
      { size: "L", color: "Silver", stock: 10 },
      { size: "XL", color: "Silver", stock: 8 },
      { size: "2XL", color: "Grey", stock: 6 },
    ],
  },
  {
    id: 18,
    name: "Womens Blouse",
    shortDescription:
      "A chic blouse for versatile professional or casual wear.",
    description: "Chic blouse for professional or casual wear.",
    longDescription:
      "This Womens Blouse is a versatile wardrobe staple, blending chic style with everyday comfort. Crafted from a soft mix of cotton, polyester, and viscose, it offers a lightweight, breathable feel with a smooth, flattering fit. Available in White, Blue, Pink, and Grey, its elegant design features a subtle neckline and tailored silhouette, making it ideal for office settings, dinners, or casual outings. The fabric resists wrinkling, ensuring a polished look throughout the day. Easy to pair with skirts, jeans, or trousers, this blouse offers endless styling possibilities for the modern woman. Its durable construction and easy-care materials make it a reliable choice for those seeking both fashion and functionality in their wardrobe.",
    price: 1700,
    discount: 15, // Increased from 10% to 15%
    discountedPrice: 1445.0, // 1700 * (1 - 15/100) = 1445.00
    category: "womens fashion",
    subCategory: "tops",
    isNewArrival: true,
    hasDiscount: true,
    flashSale: false,
    stockQuantity: 5,
    materials: ["Cotton", "Polyester", "Viscose"],
    images: {
      primary: "https://i.ibb.co/B2TRtrZP/noimage.png",
      detail: [
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
      ],
    },
    variants: [
      { size: "S", color: "White", stock: 15 },
      { size: "M", color: "White", stock: 12 },
      { size: "L", color: "Blue", stock: 10 },
      { size: "XL", color: "Pink", stock: 8 },
      { size: "2XL", color: "Grey", stock: 6 },
    ],
  },
  {
    id: 19,
    name: "Men's Chinos",
    shortDescription: "Versatile slim-fit chinos for a polished casual look.",
    description: "Versatile slim fit chinos for men.",
    longDescription:
      "These Men's Chinos offer a refined yet versatile addition to any wardrobe, perfect for a polished casual style. Made from a blend of cotton, spandex, and polyester, these slim-fit chinos provide a comfortable, stretchy fit that balances style and ease of movement. Available in Beige, Navy, Black, and Grey, their tailored design ensures a flattering silhouette suitable for both casual and semi-formal occasions. Featuring a classic five-pocket style and a durable zipper, these chinos are ideal for pairing with polo shirts, blazers, or casual tees. The high-quality fabric resists fading and wear, making them a reliable choice for daily wear, from office settings to weekend outings, offering timeless style with modern comfort.",
    price: 2000,
    discount: 15, // Increased from 10% to 15%
    discountedPrice: 1700.0, // 2000 * (1 - 15/100) = 1700.00
    category: "mens fashion",
    subCategory: "pants",
    isNewArrival: true,
    hasDiscount: true,
    flashSale: false,
    stockQuantity: 50,
    materials: ["Cotton", "Spandex", "Polyester"],
    images: {
      primary: "https://i.ibb.co/B2TRtrZP/noimage.png",
      detail: [
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
      ],
    },
    variants: [
      { size: "S", color: "Beige", stock: 15 },
      { size: "M", color: "Beige", stock: 12 },
      { size: "L", color: "Navy", stock: 10 },
      { size: "XL", color: "Black", stock: 8 },
      { size: "2XL", color: "Grey", stock: 6 },
    ],
  },
  {
    id: 20,
    name: "Womens Ankle Boots",
    shortDescription: "Stylish leather ankle boots for chic, versatile wear.",
    description: "Stylish leather ankle boots.",
    longDescription:
      "Step into style with these Womens Ankle Boots, crafted for chic versatility and lasting comfort. Made from premium leather, rubber, synthetic lining, and featuring a sturdy metal zipper, these boots offer a sleek, modern look with exceptional durability. Available in Black, Brown, and Grey, their ankle-height design and cushioned insole provide all-day comfort, making them perfect for both casual and semi-formal occasions. The rubber sole ensures reliable traction, while the high-quality leather resists wear and is easy to maintain. Ideal for pairing with jeans, skirts, or dresses, these boots add a sophisticated touch to any outfit. Whether for work, evenings out, or weekend adventures, these ankle boots combine fashion-forward design with practical functionality for the modern woman.",
    price: 2800,
    discount: 20, // Increased from 15% to 20%
    discountedPrice: 2240.0, // 2800 * (1 - 20/100) = 2240.00
    category: "womens fashion",
    subCategory: "footwear",
    isNewArrival: true,
    hasDiscount: true,
    flashSale: true,
    stockQuantity: 10,
    materials: ["Leather", "Rubber", "Synthetic Lining", "Metal (zipper)"],
    images: {
      primary: "https://i.ibb.co/B2TRtrZP/noimage.png",
      detail: [
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
        "https://i.ibb.co/B2TRtrZP/noimage.png",
      ],
    },
    variants: [
      { size: "S", color: "Black", stock: 15 },
      { size: "M", color: "Black", stock: 12 },
      { size: "L", color: "Brown", stock: 10 },
      { size: "XL", color: "Grey", stock: 8 },
      { size: "2XL", color: "Grey", stock: 6 },
    ],
  },
];
