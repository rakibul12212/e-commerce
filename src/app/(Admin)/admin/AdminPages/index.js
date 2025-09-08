import React from "react";
import Overview from "./Overview/Overview";
import BusinessAnalytics from "./BusinessAnalytics/BusinessAnalytics";
import CustomerLocation from "./CustomerLocation/CustomerLocation";
import TodaysOrderSummary from "./TodaysOrderSummary/TodaysOrderSummary";

const AdminHomePage = () => {
  return (
    <div className="py-8 space-y-8">
      <Overview />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CustomerLocation />
        <TodaysOrderSummary />
      </div>
      <BusinessAnalytics />
    </div>
  );
};

export default AdminHomePage;
