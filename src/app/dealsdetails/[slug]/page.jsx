import DealsDetails from "@/components/pages/home/container/Deals/DealsDetails";
import React from "react";

const page = async ({ params }) => {
  const Params = await params;
  return (
    <div>
      <DealsDetails params={Params} />
    </div>
  );
};

export default page;
