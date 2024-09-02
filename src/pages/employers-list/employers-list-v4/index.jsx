
import EmployersList from "@/components/employers-listing-pages/employers-list-v4";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Employers List V4 || Abroadium- Job Borad ReactJs Template",
  description: "Abroadium- Job Borad ReactJs Template",
};

const EmployerListPage4 = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <EmployersList />
    </>
  );
};

export default EmployerListPage4
