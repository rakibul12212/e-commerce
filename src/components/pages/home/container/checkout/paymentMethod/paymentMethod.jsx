"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/UI/buttons/button";
import Toast from "@/components/UI/toast/Toast";

const PaymentMethod = () => {
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [discount, setDiscount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const [orderTotal] = useState(999.99);

  const paymentMethods = [
    {
      id: "bank",
      name: "Bank Transfer",
      icon: "🏦",
      description: "Pay via online banking or bank transfer",
    },
    {
      id: "bkash",
      name: "bKash",
      icon: "📱",
      description: "Pay with bKash mobile banking",
    },
    {
      id: "cod",
      name: "Cash on Delivery",
      icon: "💵",
      description: "Pay with cash when you receive your order",
    },
  ];

  const coupons = {
    SAVE10: { discount: 10, type: "percentage" },
    FLAT50: { discount: 50, type: "flat" },
    WELCOME: { discount: 15, type: "percentage" },
  };

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: "", type: "success" });
  };

  const handlePaymentSelect = (paymentId) => {
    setSelectedPayment(paymentId);
  };

  const applyCoupon = () => {
    if (!couponCode.trim()) {
      showToast("Please enter a coupon code", "warning");
      return;
    }

    const coupon = coupons[couponCode.toUpperCase()];
    if (!coupon) {
      showToast("Invalid coupon code", "error");
      return;
    }

    if (appliedCoupon?.code === couponCode.toUpperCase()) {
      showToast("Coupon already applied", "warning");
      return;
    }

    const discountAmount =
      coupon.type === "percentage"
        ? (orderTotal * coupon.discount) / 100
        : coupon.discount;

    setAppliedCoupon({ code: couponCode.toUpperCase(), ...coupon });
    setDiscount(discountAmount);
    showToast(
      `Coupon applied! You saved $${discountAmount.toFixed(2)}`,
      "success",
    );
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setDiscount(0);
    setCouponCode("");
    showToast("Coupon removed", "info");
  };

  const handlePlaceOrder = async () => {
    if (!selectedPayment) {
      showToast("Please select a payment method", "warning");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock order success
      showToast("Order placed successfully!", "success");

      // Redirect to home after 2 seconds
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      showToast("Failed to place order. Please try again.", "error");
      setIsLoading(false);
    }
  };

  const finalTotal = Math.max(0, orderTotal - discount);

  return (
    <div className="max-w-7xl mx-auto p-3 sm:p-4 md:p-6 lg:p-8 bg-white min-h-screen">
      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={hideToast}
      />

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center">
        Payment Method
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <div className="order-2 lg:order-1">
          {/* Payment Methods */}
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">
              Select Payment Method
            </h2>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`border rounded-lg p-3 sm:p-4 cursor-pointer transition-all ${
                    selectedPayment === method.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  onClick={() => handlePaymentSelect(method.id)}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id={method.id}
                      name="payment"
                      checked={selectedPayment === method.id}
                      onChange={() => handlePaymentSelect(method.id)}
                      className="mr-3 w-4 h-4 sm:w-5 sm:h-5"
                    />
                    <div className="flex items-center flex-1">
                      <span className="text-xl sm:text-2xl mr-3">
                        {method.icon}
                      </span>
                      <div className="flex-1">
                        <label
                          htmlFor={method.id}
                          className="font-medium cursor-pointer text-sm sm:text-base"
                        >
                          {method.name}
                        </label>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Place Order Button */}
          <div className="mt-6 sm:mt-8">
            <Button
              text={isLoading ? "Processing..." : "Place Order"}
              onClick={handlePlaceOrder}
              variant="flashSaleButton"
              className={`w-full py-3 sm:py-4 text-base sm:text-lg font-semibold ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          {/* Order Summary */}
          <div className="bg-gray-50 p-3 sm:p-4 md:p-5 rounded-lg mb-5 sticky top-4">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">
              Order Summary
            </h2>
            <div className="border border-gray-300 p-4 sm:p-6 rounded-lg bg-white">
              <div className="flex justify-between mb-2 text-sm sm:text-base">
                <span>Subtotal:</span>
                <span className="font-medium">${orderTotal.toFixed(2)}</span>
              </div>
              {appliedCoupon && (
                <div className="flex justify-between mb-2 text-green-600 text-sm sm:text-base">
                  <span>Discount ({appliedCoupon.code}):</span>
                  <span className="font-medium">-${discount.toFixed(2)}</span>
                </div>
              )}
              <hr className="my-3" />
              <div className="flex justify-between font-bold text-base sm:text-lg">
                <span>Total:</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>

              {/* Coupon Section */}
              <div className="mt-6">
                <h3 className="text-base sm:text-lg font-semibold mb-4">
                  Apply Coupon
                </h3>
                <div className="flex flex-col sm:flex-row gap-2 mb-3">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={appliedCoupon !== null}
                  />
                  {!appliedCoupon ? (
                    <Button
                      text="Apply"
                      onClick={applyCoupon}
                      variant="primary"
                      className="px-4 sm:px-6 py-2 text-sm sm:text-base w-full sm:w-auto"
                    />
                  ) : (
                    <Button
                      text="Remove"
                      onClick={removeCoupon}
                      variant="secondary"
                      className="px-4 sm:px-6 py-2 text-sm sm:text-base w-full sm:w-auto"
                    />
                  )}
                </div>
                {appliedCoupon && (
                  <div className="text-green-600 text-xs sm:text-sm">
                    ✓ Coupon "{appliedCoupon.code}" applied successfully!
                  </div>
                )}
                <div className="text-xs text-gray-500 mt-2">
                  Try: SAVE10, FLAT50, or WELCOME
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
