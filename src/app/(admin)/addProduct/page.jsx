"use client";
import React, { useState } from "react";
import Button from "@/components/UI/buttons/button";
import { FaPlus } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";


const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    longDescription: "",
    price: "",
    discount: "",
    category: "",
    isNewArrival: false,
    hasDiscount: false,
    materials: [],
    images: {
      primary: "",
      detail: ["", "", ""],
    },
    variants: [{ size: "", color: "", stock: "" }],
  });

  return (
    <div className="max-w-4xl mx-auto p-8">
      
      <h1 className="text-3xl font-bold mb-8">Add New Product</h1>

      <form className="space-y-6">
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Product Name*
            </label>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Category*</label>
            <select
              name="category"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select Category</option>
              <option value="mens fashion">Men's Fashion</option>
              <option value="womens fashion">Women's Fashion</option>
            </select>
          </div>
        </div>

        {/* Price and Discount */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Price*</label>
            <input
              type="number"
              name="price"
              placeholder="Product Price"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Discount (%)
            </label>
            <input
              type="number"
              name="discount"
              placeholder="Discount Percentage"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center space-x-4 pt-8">
            <label className="flex items-center">
              <input type="checkbox" name="hasDiscount" className="mr-2" />
              Has Discount
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="isNewArrival" className="mr-2" />
              New Arrival
            </label>
          </div>
        </div>

        {/* Descriptions */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Short Description*
          </label>
          <textarea
            name="description"
            placeholder="Short Description"
            rows="3"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Long Description
          </label>
          <textarea
            name="longDescription"
            placeholder="Detailed Description"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Images */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Primary Image URL*
          </label>
          <input
            type="url"
            name="images.primary"
            placeholder="https://example.com/image.jpg"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Detail Images (Optional)
          </label>

          <input
            type="url"
            placeholder={`Detail Image URL`}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2"
          />
        </div>

        {/* Materials */}
        <div>
          <label className="block text-sm font-medium mb-2">Materials</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Add material"
              className="flex-1 p-3 border border-gray-300 rounded-lg "
            />
            <button
              type="button"
              className=" px-4 py-3 text-gray-300 border border-gray-300 rounded-lg hover:bg-black hover:text-white"
            >
              <FaPlus />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center gap-2">
              <button type="button" className="text-red-500 hover:text-red-700">
                ×
              </button>
            </span>
          </div>
        </div>

        {/* Variants */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product Variants
          </label>

          <div className="border border-gray-500 rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <div>
                <label htmlFor="size" className="sr-only">
                  Size
                </label>
                <input
                  id="size"
                  type="text"
                  placeholder="Size (S, M, L, XL)"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="color" className="sr-only">
                  Color
                </label>
                <input
                  id="color"
                  type="text"
                  placeholder="Color"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="stock" className="sr-only">
                  Stock Quantity
                </label>
                <input
                  id="stock"
                  type="number"
                  placeholder="Stock Quantity"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Add variant"
                  className="flex-1 px-4 py-3  border border-gray-300 rounded-lg hover:bg-black hover:text-white"
                >
                  Add
                </button>
                <button
                  type="button"
                  aria-label="Delete variant"
                  className="flex-1 px-4 py-3 bg-black text-white border border-gray-300 rounded-lg hover:bg-red-500 hover:border-red-500 hover:text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <Button
            variant="primary"
            text="Add Product"
            type="submit"
            className="w-full md:w-auto px-8 py-3"
          />
        </div>
      </form>
    </div>
  );
};

export default page;
