import AdminTable from "@/components/UI/table/AdminTable";

const columns = [
  { header: "Most visited page", accessor: "page" },
  { header: "Views", accessor: "views" },
  {
    header: "Location",
    accessor: "link",
    render: (row) => (
      <a
        href={row.link}
        className="text-blue-600 hover:underline"
        target="_blank"
      >
        View
      </a>
    ),
  },
];
const data = [
  { page: "Home", views: "5,000", link: "/" },
  { page: "Shop/ Product", views: "5,000", link: "/shop/product" },
  {
    page: "Category Archive",
    views: "5,000",
    link: "/category/archive",
  },
  {
    page: "/product/baby-shoes",
    views: "5,000",
    link: "/product/baby-shoes",
  },
];

const MostVisitedPage = () => {
  return (
    <div>
      <AdminTable columns={columns} data={data} rows={10} />
    </div>
  );
};

export default MostVisitedPage;
