"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [materials, setMaterials] = useState([]);
  const [materialInput, setMaterialInput] = useState("");
  const [discount, setDiscount] = useState("");
  const [hasDiscount, setHasDiscount] = useState(false);
  const [isNewArrival, setIsNewArrival] = useState(false);
  const [flashSale, setFlashSale] = useState(false);
  const [images, setImages] = useState({ primary: "", detail: ["", "", ""] });
  const [variants, setVariants] = useState([
    { size: "", color: "", stock: "" },
  ]);

  const discountedPrice =
    price && discount ? price - (price * discount) / 100 : price || 0;
  
    const stockQuantity = variants
    .flatMap((variant) => parseInt(variant.stock) || 0)
    .reduce((a, b) => a + b, 0);
  console.log("Total Stock Quantity:", stockQuantity);


  const handleVariantChange = (index, field, value) => {
    const updatedVariants = [...variants];
    updatedVariants[index][field] = value;
    setVariants(updatedVariants);
  };

  const addVariant = () => {
    setVariants([...variants, { size: "", color: "", stock: "" }]);
  };

  const deleteVariant = (index) => {
    if (variants.length > 1) {
      const updatedVariants = variants.filter((_, i) => i !== index);
      setVariants(updatedVariants);
    }
  };

  const addMaterial = () => {
    if (materialInput.trim() !== "") {
      setMaterials([...materials, materialInput.trim()]);
      setMaterialInput("");
    }
  };

  const deleteMaterial = (index) => {
    const updatedMaterials = materials.filter((_, i) => i !== index);
    setMaterials(updatedMaterials);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      name,
      price: parseFloat(price) || 0,
      shortDescription,
      longDescription,
      category,
      subCategory,
      materials,
      hasDiscount,
      isNewArrival,
      flashSale,
      images,
      discount: parseFloat(discount) || 0,
      discountedPrice,
      stockQuantity,
      variants: variants.filter(
        (variant) => variant.size && variant.color && variant.stock,
      ),
    };

    console.log("Product Data :", productData);
    alert("Product added successfully!");
  };

  return (
    <div>
      <p className="text-center text-3xl font-semibold py-10">Add Product</p>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        <div>
          <label className="block text-sm font-medium mb-2">
            Product Name*
          </label>
          <input
            type="text"
            value={name}
            placeholder="Product Name"
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
           
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            Product Price*
          </label>
          <input
            type="number"
            value={price}
            placeholder="Product Price"
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
           
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Category*</label>
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
           
          >
            <option value="">Select Category</option>
            <option value="mens fashion">Men's Fashion</option>
            <option value="womens fashion">Women's Fashion</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            Sub Category*
          </label>
          <select
            name="sub category"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
           
          >
            <option value="">Select Sub Category</option>
            <option value="Shirts">Shirts</option>
            <option value="Dresses">Dresses</option>
            <option value="Jackets">Jackets</option>
            <option value="Jeans">Jeans</option>
            <option value="footwear">footwear</option>
            <option value="accessories">accessories</option>
            <option value="outerwear">outerwear</option>
            <option value="shorts">shorts</option>
            <option value="sweaters">sweaters</option>
            <option value="skirts">skirts</option>
            <option value="tops">tops</option>
            <option value="pants">pants</option>
          </select>
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium mb-4">
            Product Variants
          </label>
          {variants.map((variant, index) => (
            <div
              key={index}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center mb-4"
            >
              <div>
                <label htmlFor={`size-${index}`} className="sr-only">
                  Size
                </label>
                <input
                  id={`size-${index}`}
                  type="text"
                  placeholder="Size (S, M, L, XL)"
                  value={variant.size}
                  onChange={(e) =>
                    handleVariantChange(index, "size", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg "
                />
              </div>
              <div>
                <label htmlFor={`color-${index}`} className="sr-only">
                  Color
                </label>
                <input
                  id={`color-${index}`}
                  type="text"
                  placeholder="Color"
                  value={variant.color}
                  onChange={(e) =>
                    handleVariantChange(index, "color", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg "
                />
              </div>
              <div>
                <label htmlFor={`stock-${index}`} className="sr-only">
                  Stock Quantity
                </label>
                <input
                  id={`stock-${index}`}
                  type="number"
                  placeholder="Stock Quantity"
                  value={variant.stock}
                  onChange={(e) =>
                    handleVariantChange(index, "stock", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg "
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={addVariant}
                  aria-label="Add variant"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-black hover:text-white flex items-center justify-center"
                >
                  <FaPlus className="text-gray-400" />
                </button>
                <button
                  type="button"
                  onClick={() => deleteVariant(index)}
                  aria-label="Delete variant"
                  className="flex-1 px-4 py-3 bg-black text-white border border-gray-300 rounded-lg hover:bg-red-500 hover:border-red-500 hover:text-white flex items-center justify-center"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* material */}
        <div>
          <label className="block text-sm font-medium mb-2">Materials</label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={materialInput}
              onChange={(e) => setMaterialInput(e.target.value)}
              placeholder="Add material"
              className="flex-1 p-3 border border-gray-300 rounded-lg "
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addMaterial();
                }
              }}
            />
            <button
              type="button"
              onClick={addMaterial}
              className=" px-4 py-3 text-gray-300 border border-gray-300 rounded-lg hover:bg-black hover:text-white"
            >
              <FaPlus />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {materials.map((material, index) => (
              <span
                key={index}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                {material}
                <button
                  type="button"
                  onClick={() => deleteMaterial(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
        {/* discount */}
        <div>
          <label className="block text-sm font-medium mb-2">Discount*</label>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="Enter discount percentage"
            className="w-full p-3 border border-gray-300 rounded-lg"
           
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            Discounted Price
          </label>
          <input
            type="number"
            value={discountedPrice}
            placeholder="Discounted Price"
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
            readOnly
          />
        </div>
        {/* Short Description */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Short Description*
          </label>
          <textarea
            rows="3"
            value={shortDescription}
            placeholder="Enter short description"
            onChange={(e) => setShortDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
           
          />
        </div>
        {/*  Long Description */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Long Description*
          </label>
          <textarea
            rows="3"
            value={longDescription}
            placeholder="Enter long description"
            onChange={(e) => setLongDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
           
          />
        </div>
        {/* checkboxes */}
        <div className="flex justify-center items-center space-x-4 text-md">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="hasDiscount"
              className="mr-2 w-8 h-8"
              checked={hasDiscount}
              onChange={(e) => setHasDiscount(e.target.checked)}
            />
            Has Discount
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              name="isNewArrival"
              className="mr-2 w-8 h-8"
              checked={isNewArrival}
              onChange={(e) => setIsNewArrival(e.target.checked)}
            />
            New Arrival
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="flashSale"
              className="mr-2 w-8 h-8"
              checked={flashSale}
              onChange={(e) => setFlashSale(e.target.checked)}
            />
            Flash Sale
          </label>
        </div>

        {/* images */}
        <div className="col-span-1 md:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Primary Image URL*
              </label>
              <input
                type="url"
                name="primaryImage"
                placeholder="Enter primary image URL"
                value={images.primary}
                onChange={(e) =>
                  setImages({ ...images, primary: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg"
               
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Stock Quantity
              </label>
              <input
                type="number"
                value={stockQuantity}
                placeholder="Discounted Price"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Detail Images URLs
              </label>
              <div className="space-y-2">
                {images.detail.map((url, index) => (
                  <input
                    key={index}
                    type="url"
                    placeholder={`Detail image ${index + 1} URL`}
                    value={url}
                    onChange={(e) => {
                      const newDetail = [...images.detail];
                      newDetail[index] = e.target.value;
                      setImages({ ...images, detail: newDetail });
                    }}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

       
        <div className="col-span-1 md:col-span-3 flex justify-center mt-6">
          <button
            type="submit"
            className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
