"use client";

import { useState, useEffect } from "react";
import { useCard } from "@/hooks/usecard";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCard();
  const router = useRouter();

  const [shipping, setShipping] = useState({
    name: "",
    phone: "",
    district: "",
    area: "",
  });
  const [billing, setBilling] = useState({
    name: "",
    phone: "",
    address: "",
    sameAsShipping: false,
  });
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [terms, setTerms] = useState(false);

  useEffect(() => {
    if (billing.sameAsShipping) {
      setBilling({
        ...billing,
        name: shipping.name,
        phone: shipping.phone,
        address: `${shipping.district}, ${shipping.area}`,
      });
    }
  }, [billing.sameAsShipping, shipping]);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );
  const totalDiscount = cartItems.reduce(
    (acc, item) =>
      acc +
      (item.isDiscount
        ? (item.price * item.qty * item.discountPercent) / 100
        : 0),
    0,
  );
  const finalTotal = totalPrice - totalDiscount;

  const handleConfirmOrder = () => {
    if (!terms) return toast.error("Please accept terms!");
    if (!paymentMethod) return toast.error("Select a payment method!");

    toast.success("Order confirmed successfully!");
    clearCart();
    setTimeout(() => router.push("/"), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
     
      <div className="space-y-6">
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-bold mb-4 text-gradient-to-r from-blue-400 to-purple-500">
            Shipping Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name *"
              value={shipping.name}
              onChange={(e) =>
                setShipping({ ...shipping, name: e.target.value })
              }
              className="border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Phone *"
              value={shipping.phone}
              onChange={(e) =>
                setShipping({ ...shipping, phone: e.target.value })
              }
              className="border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <select
              value={shipping.district}
              onChange={(e) =>
                setShipping({ ...shipping, district: e.target.value })
              }
              className="border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select District</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
            </select>
            <select
              value={shipping.area}
              onChange={(e) =>
                setShipping({ ...shipping, area: e.target.value })
              }
              className="border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Area</option>
              <option value="Area1">Area 1</option>
              <option value="Area2">Area 2</option>
            </select>
          </div>
        </div>

        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gradient-to-r from-green-400 to-teal-400">
              Billing Details
            </h2>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={billing.sameAsShipping}
                onChange={(e) =>
                  setBilling({ ...billing, sameAsShipping: e.target.checked })
                }
                className="accent-green-400"
              />
              Same as shipping
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name *"
              value={billing.name}
              onChange={(e) => setBilling({ ...billing, name: e.target.value })}
              className="border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              placeholder="Phone *"
              value={billing.phone}
              onChange={(e) =>
                setBilling({ ...billing, phone: e.target.value })
              }
              className="border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              placeholder="Address *"
              value={billing.address}
              onChange={(e) =>
                setBilling({ ...billing, address: e.target.value })
              }
              className="border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 md:col-span-2"
            />
          </div>
        </div>

        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
          <h3 className="font-semibold mb-2 text-gradient-to-r from-blue-400 to-purple-400">
            Notes (Optional)
          </h3>
          <textarea
            rows={4}
            placeholder="Write your notes here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />
        </div>
      </div>

     
      <div className="space-y-6">
       
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-bold mb-4 text-gradient-to-r from-pink-400 to-red-400">
            Order Summary
          </h2>
          <div className="space-y-2">
            {cartItems.map((item) => {
              const itemTotal = item.price * item.qty;
              const itemDiscount = item.isDiscount
                ? (itemTotal * item.discountPercent) / 100
                : 0;
              const itemFinal = itemTotal - itemDiscount;
              return (
                <div
                  key={item.id}
                  className="flex justify-between  text-base"
                >
                  <div>
                    <p>{item.name}</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Qty: {item.qty}
                    </p>
                  </div>
                  <div className="text-right">
                    
                    <p className="font-semibold">
                      ${itemFinal.toLocaleString()}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <hr className="my-4 border-gray-300 dark:border-gray-700" />

          <div className="space-y-1">
            <div className="flex justify-between font-medium">
              <p>Subtotal</p>
              <p>${totalPrice.toLocaleString()}</p>
            </div>
            <div className="flex justify-between font-medium text-red-500">
              <p>Discount</p>
              <p>- ${totalDiscount.toLocaleString()}</p>
            </div>
            <div className="flex justify-between font-bold text-lg   py-2 rounded-lg text-black">
              <p>Total</p>
              <p>${finalTotal.toLocaleString()}</p>
            </div>
          </div>
        </div>

        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow space-y-3">
          <h2 className="text-xl font-bold text-gradient-to-r from-cyan-400 to-blue-500">
            Payment Method
          </h2>
          {[
            "Cash On Delivery",
            "Bkash",
            "Bank Transfer",
          ].map((method, idx) => (
            <label
              key={idx}
              className="flex items-center gap-3 border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <input
                type="radio"
                name="payment"
                value={method}
                checked={paymentMethod === method}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="accent-blue-500"
              />
              <span>{method}</span>
            </label>
          ))}

          <label className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            I agree to the terms and conditions.
          </label>

          <button
            onClick={handleConfirmOrder}
            disabled={!terms}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-600 py-3 rounded-lg text-white font-semibold  transition transform disabled:opacity-30 mt-2"
          >
            Confirm Order
          </button>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default CheckoutPage;
