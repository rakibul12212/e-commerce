import AdminTable from "@/components/UI/table/AdminTable";

const columns = [
  { header: "Top Visited Customer Location", accessor: "page" },
  { header: "Visitor", accessor: "Visitor" },
  {
    header: "Map",
    accessor: "link", // must match data key
    render: (row) => (
      <a
        href={row.link}
        className="text-blue-600 hover:underline"
        target="_blank"
      >
        See Map
      </a>
    ),
  },
];

const data = [
  { page: "Mirpur-10", Visitor: "10,000", link: "/" },
  { page: "Mirpur-10", Visitor: "10,000", link: "/" },
  { page: "Mirpur-10", Visitor: "10,000", link: "/" },
  { page: "Mirpur-1", Visitor: "10,000", link: "/" },
  { page: "Mirpur-1", Visitor: "10,000", link: "/" },
  { page: "Mirpur-1", Visitor: "10,000", link: "/" },
  { page: "Mirpur-11", Visitor: "10,000", link: "/" },
  { page: "Mirpur-12", Visitor: "10,000", link: "/" },
  { page: "Mirpur-13", Visitor: "10,000", link: "/" },
  { page: "Mirpur-10", Visitor: "10,000", link: "/" },
];

const TopVisitedCustomerLocation = () => {
  return (
    <div >
      <AdminTable columns={columns} data={data} rows={10} />
    </div>
  );
};

export default TopVisitedCustomerLocation;
