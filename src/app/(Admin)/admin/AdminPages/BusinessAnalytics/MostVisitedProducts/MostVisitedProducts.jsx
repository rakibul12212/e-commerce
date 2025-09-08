import AdminTable from "@/components/UI/table/AdminTable";

const columns = [
  { header: "Most Visited Products", accessor: "page" },
  { header: "Views", accessor: "views" },
  
];
const data = [
  { page: "Product 01", views: "5,000", link: "/" },
  { page: "Product 02", views: "5,000", link: "/" },
  { page: "Product 03", views: "5,000", link: "/" },
  { page: "Product 04", views: "5,000", link: "/" },
  { page: "Product 05", views: "5,000", link: "/" },
  { page: "Product 06", views: "5,000", link: "/" },
  { page: "Product 07", views: "5,000", link: "/" },
  { page: "Product 08", views: "5,000", link: "/" },
  { page: "Product 09", views: "5,000", link: "/" },
  { page: "Product 10", views: "5,000", link: "/" },
 
  
];

const MostVisitedProducts = () => {
  return (
    <div>
      <AdminTable columns={columns} data={data} rows={10} />
    </div>
  );
};

export default MostVisitedProducts;
