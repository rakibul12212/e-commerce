import SubCategoryDetailsPage from "@/components/pages/home/container/subCategoryPage/subCategoryDetailsPage";


const subCategoryPage = async ({ params }) => {
  const Params = await params;
  return (
    <div>
      <SubCategoryDetailsPage params={Params} />
    </div>
  );
};

export default subCategoryPage;
