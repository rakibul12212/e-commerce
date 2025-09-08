import React from "react";

const Overview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-5 gap-4">
      <div className="p-4 bg-gray-100 rounded-lg border border-gray-200 shadow-md space-y-2 text-center hover:scale-105 transition-transform ease-in-out duration-500 will-change-transform">
        <h1 className="text-lg font-bold text-blue-950">Total Visitor</h1>
        <p className="text-2xl font-semibold">1,234</p>
        <p className="text-gray-500">12% froms last month</p>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg border border-gray-200 shadow-md space-y-2 text-center hover:scale-105 transition-transform ease-in-out duration-500 will-change-transform">
        <h1 className="text-lg font-bold text-blue-950">Total Order</h1>
        <p className="text-2xl font-semibold">5,000</p>
        <p className="text-gray-500">12% froms last month</p>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg border border-gray-200 shadow-md space-y-2 text-center hover:scale-105 transition-transform ease-in-out duration-500 will-change-transform">
        <h1 className="text-lg font-bold text-blue-950">Pending Orders</h1>
        <p className="text-2xl font-semibold">1,234</p>
        <p className="text-gray-500">12% froms last month</p>
      </div>

      <div className="p-4 bg-gray-100 rounded-lg border border-gray-200 shadow-md space-y-2 text-center hover:scale-105 transition-transform ease-in-out duration-500 will-change-transform">
        <h1 className="text-lg font-bold text-blue-950">Total Customers</h1>
        <p className="text-2xl font-semibold">1,234</p>
        <p className="text-gray-500">12% froms last month</p>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg border border-gray-200 shadow-md space-y-2 text-center hover:scale-105 transition-transform ease-in-out duration-500 will-change-transform">
        <h1 className="text-lg font-bold text-blue-950">Total Sale</h1>
        <p className="text-2xl font-semibold">$1,234</p>
        <p className="text-gray-500">12% froms last month</p>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg border border-gray-200 shadow-md space-y-2 text-center hover:scale-105 transition-transform ease-in-out duration-500 will-change-transform">
        <h1 className="text-lg font-bold text-blue-950">Total Profit</h1>
        <p className="text-2xl font-semibold">$5,000</p>
        <p className="text-gray-500">12% froms last month</p>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg border border-gray-200 shadow-md space-y-2 text-center hover:scale-105 transition-transform ease-in-out duration-500 will-change-transform">
        <h1 className="text-lg font-bold text-blue-950">Total Products</h1>
        <p className="text-2xl font-semibold">150</p>
      </div>
      <div className="col-span-2 bg-gray-100 rounded-lg border border-gray-200 shadow-md space-y-2 text-center p-2">
        <h1 className="text-lg font-bold text-blue-950">
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
      <div className="p-4 bg-gray-100 rounded-lg border border-gray-200 shadow-md space-y-2 text-center hover:scale-105 transition-transform ease-in-out duration-500 will-change-transform">
        <h1 className="text-lg font-bold text-blue-950 ">Traffic Source</h1>

        <div className="text-left line-clamp-5">
          <p className=" space-x-4">
            <span className="font-semibold">Direct: 2000</span>
            <span className="text-gray-500">10% froms last month</span>
          </p>
          <p className=" space-x-4">
            <span className="font-semibold">Organic: 2000</span>
            <span className="text-gray-500">10% froms last month</span>
          </p>
          <p className=" space-x-4">
            <span className="font-semibold">Social: 2000</span>
            <span className="text-gray-500">10% froms last month</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
