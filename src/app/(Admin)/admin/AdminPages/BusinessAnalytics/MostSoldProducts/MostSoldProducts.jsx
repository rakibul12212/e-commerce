import AdminTable from '@/components/UI/table/AdminTable';

const columns = [
  { header: "Most Sold Products", accessor: "page" },
  { header: "Visitor", accessor: "Visitor" },
  { header: "Sales", accessor: "sales" },
];
const data = [
  { page: "IPhone 15", Visitor: "10,000", sales: "8,000" },
  { page: "Galaxy A54", Visitor: "10,000", sales: "8,000" },
  { page: "Razer Blade 15", Visitor: "10,000", sales: "8,000" },
  { page: "Blue Star Inverter AC 1.5 Ton", Visitor: "10,000", sales: "8,000" },
  { page: "HP Envy 32 All-in-One", Visitor: "10,000", sales: "8,000" },
  { page: "Lenovo Yoga AIO 7", Visitor: "10,000", sales: "8,000" },
  { page: "Ryzen 9 7900X3D", Visitor: "10,000", sales: "8,000" },
  { page: "Corsair MP600 PRO XT 1TB", Visitor: "10,000", sales: "8,000" },
  { page: "ASUS ROG Strix RX 7800 XT", Visitor: "10,000", sales: "8,000" },
  { page: "OLED C3 55-inch", Visitor: "10,000", sales: "8,000" },
];

const MostSoldProducts = () => {
    return (
      <div>
        <AdminTable columns={columns} data={data} rows={10} />
      </div>
    );
};

export default MostSoldProducts;