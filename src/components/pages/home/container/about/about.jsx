"use client"
import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const About = () => {
  const [openSection, setOpenSection] = useState(0);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? -1 : index);
  };

  const sections = [
    {
      title: "About E-Commerce Store",
      content: (
        <p className="text-gray-700 leading-relaxed">
          E-Commerce Store, established in 2024, stands out as the best online
          shopping platform and the go-to destination for quality products.
          We're your trusted source for high-quality electronics, fashion, home
          appliances, and tech gadgets. With an extensive selection of products
          and unbeatable prices, E-Commerce Store has solidified its reputation
          as the top online marketplace.
        </p>
      ),
    },
    {
      title: "Electronics & Gaming",
      content: (
        <p className="text-gray-700 leading-relaxed">
          Discover the best electronics store - E-Commerce Store, your go-to
          destination for electronics shopping. We sell the best{" "}
          <strong>electronics at competitive prices</strong>. Explore top brands
          like HP, Asus, Acer, Lenovo, MSI, Gigabyte, Apple, Xiaomi, Huawei, and
          Microsoft. Whether you're a gamer or a student, find the perfect
          laptop that suits your needs and budget. E-Commerce Store, the trusted
          name in gaming laptops, brings you the latest models from Razer and
          more. Shop with confidence at E-Commerce Store, the ultimate
          electronics seller.
        </p>
      ),
    },
    {
      title: "Fashion & Style",
      content: (
        <p className="text-gray-700 leading-relaxed">
          Looking for where to buy trendy fashion in style? Look no further –
          E-Commerce Store is your answer. As a leading fashion retailer, we
          cater to the needs of fashion enthusiasts. We offer a comprehensive
          clothing collection, serving customers around the country. Experience
          the difference at E-Commerce Store – your trusted partner in the world
          of fashion and style.
        </p>
      ),
    },
    {
      title: "Home Appliances",
      content: (
        <p className="text-gray-700 leading-relaxed">
          Discover the best gadgets for your home with our top-notch tech
          solutions! Explore our wide range of home appliances at unbeatable
          prices, including smart home devices from leading brands like Xiaomi
          and others, premium kitchen appliances, powerful home automation
          systems, and more. Find the perfect balance of quality and
          affordability with our collection featuring brands like Samsung, LG,
          Whirlpool, and other renowned names. Shop now to enjoy a lifetime of
          convenience and comfort offerings.
        </p>
      ),
    },
    {
      title: "Mobile Phones",
      content: (
        <p className="text-gray-700 leading-relaxed">
          E-Commerce Store is the best shop for mobile phones. We offer all
          kinds of mobile brands like Google, Huawei, Motorola, Samsung, iPhone
          and more. As our collection of mobile phones is huge, customers can
          buy any desired product from our shop at affordable prices. Our shop
          offers transparent and comprehensive warranty policies for all mobile
          phones without any complications. We provide the best prices on the
          market, making it a preferred choice for customers, especially when
          considering the mobile phone price range. Visit our website today to
          explore our wide range of mobile phones; find the perfect fit for your
          budget, and place your order online.
        </p>
      ),
    },
    {
      title: "Customer Service",
      content: (
        <p className="text-gray-700 leading-relaxed">
          If you're searching for a reliable online shopping experience,
          E-Commerce Store is an excellent choice. Known for cutting-edge
          technology and exceptional service, we offer a wide range of products
          including electronics, fashion, home appliances, and more. Whether
          it's same-day delivery or comprehensive warranty, E-Commerce Store
          ensures powerful shopping with excellent customer support. Visit our
          online store and enjoy hassle-free shopping all year round.
        </p>
      ),
    },
    {
      title: "Why Choose E-Commerce Store?",
      content: (
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Wide selection of high-quality products</li>
          <li>Competitive prices and regular discounts</li>
          <li>Fast and reliable delivery service</li>
          <li>Excellent customer support</li>
          <li>Secure payment options</li>
          <li>Easy returns and exchanges</li>
          <li>Trusted by thousands of customers</li>
        </ul>
      ),
    },
  ];

  return (
    <div>
      <div>
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            E-Commerce Store - Trusted Online Shopping Platform
          </h1>
          <p className="text-lg text-gray-700">
            Best Online Shopping Experience
          </p>
        </div>

        {/* Accordion */}
        <div className=" space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
              >
                <h2 className="text-xl font-semibold text-gray-900">
                  {section.title}
                </h2>
                {openSection === index ? (
                  <HiChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <HiChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openSection === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-4 bg-white">{section.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
