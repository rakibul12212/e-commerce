"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CheckoutForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const router = useRouter();

  const handleClick = () => {
    router.push("/checkout/payment");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      phone,
      email,
      street,
      apartment,
      city,
    };
    console.log("User Data:", userData);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold py-5">Billing Details</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Phone number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            name="street"
            onChange={(e) => setStreet(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="apartment">Apartment,Floor etc.(optional):</label>
          <input
            type="text"
            id="apartment"
            name="apartment"
            onChange={(e) => setApartment(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="city">Town/City:</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="px-8 py-1 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
