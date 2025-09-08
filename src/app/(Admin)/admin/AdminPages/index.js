import React from "react";
import Overview from "./Overview/Overview";
import BusinessAnalytics from "./BusinessAnalytics/BusinessAnalytics";

const AdminHomePage = () => {
  return (
    <div className="py-8 space-y-8">
          <Overview />
          <BusinessAnalytics/>
    </div>
  );
};

export default AdminHomePage;
