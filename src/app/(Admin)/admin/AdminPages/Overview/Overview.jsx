import React from "react";

const Overview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <div className="p-4 bg-gray-100 rounded-lg shadow-md space-y-2 text-center hover:scale-105 transition-transform ease-in-out duration-500 will-change-transform">
        <h1 className="text-lg font-bold text-blue-900">Total Visitor</h1>
        <p className="text-lg font-semibold">1,234</p>
        <p className="text-gray-500">12% froms last month</p>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md space-y-2 text-center hover:scale-105 transition-transform ease-in-out duration-500 will-change-transform">
        <h1 className="text-lg font-bold text-blue-900">Total Order</h1>
        <p className="text-lg font-semibold">5,000</p>
        <p className="text-gray-500">12% froms last month</p>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md space-y-2 text-center hover:scale-105 transition-transform ease-in-out duration-500 will-change-transform">
        <h1 className="text-lg font-bold text-blue-900">Pending Orders</h1>
        <p className="text-lg font-semibold">1,234</p>
        <p className="text-gray-500">12% froms last month</p>
      </div>

      <div className="p-4 bg-gray-100 rounded-lg shadow-md space-y-2 text-center hover:scale-105 transition-transform ease-in-out duration-500 will-change-transform">
        <h1 className="text-lg font-bold text-blue-900">Total Customers</h1>
        <p className="text-lg font-semibold">1,234</p>
        <p className="text-gray-500">12% froms last month</p>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md space-y-2 text-center hover:scale-105 transition-transform ease-in-out duration-500 will-change-transform">
        <h1 className="text-lg font-bold text-blue-900">Total Sale</h1>
        <p className="text-lg font-semibold">1,234</p>
        <p className="text-gray-500">12% froms last month</p>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md space-y-2 text-center hover:scale-105 transition-transform ease-in-out duration-500 will-change-transform">
        <h1 className="text-lg font-bold text-blue-900">Total Profit</h1>
        <p className="text-lg font-semibold">5,000</p>
        <p className="text-gray-500">12% froms last month</p>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md space-y-2 text-center hover:scale-105 transition-transform ease-in-out duration-500 will-change-transform">
        <h1 className="text-lg font-bold text-blue-900">Total Products</h1>
        <p className="text-lg font-semibold">1,234</p>
        <p className="text-gray-500">12% froms last month</p>
      </div>
      <div className="col-span-2 bg-gray-100 rounded-lg shadow-md space-y-2 text-center p-2">
        <h1 className="text-lg font-bold text-blue-900">
          Order Status Summary
        </h1>
        <div className="text-white grid grid-cols-5 gap-2 p-2">
          <div className="bg-blue-950 p-2 rounded-md hover:scale-105 transition-transform ease-in-out duration-500 will-change-transform">
            <p className="font-semibold">Pending</p>
            <p>25</p>
          </div>
          <div className="bg-blue-950 p-2 rounded-md hover:scale-105 transition-transform ease-in-out duration-500 will-change-transform">
            <p className="font-semibold">Processing</p>
            <p>10</p>
          </div>
          <div className="bg-blue-950 p-2 rounded-md hover:scale-105 transition-transform ease-in-out duration-500 will-change-transform">
            <p className="font-semibold">Shipped</p>
            <p>15</p>
          </div>
          <div className="bg-blue-950 p-2 rounded-md hover:scale-105 transition-transform ease-in-out duration-500 will-change-transform">
            <p className="font-semibold">Delivered</p>
            <p>20</p>
          </div>
          <div className="bg-blue-950 p-2 rounded-md hover:scale-105 transition-transform ease-in-out duration-500 will-change-transform">
            <p className="font-semibold">Cancelled</p>
            <p>5</p>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md space-y-2 text-center hover:scale-105 transition-transform ease-in-out duration-500 will-change-transform">
        <h1 className="text-lg font-bold text-blue-900">Traffic Source</h1>
        <p className="text-lg font-semibold">1,234</p>
        <p className="text-gray-500">12% froms last month</p>
      </div>
    </div>
  );
};

export default Overview;
