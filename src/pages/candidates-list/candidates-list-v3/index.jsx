

import CandidatesList from "@/components/candidates-listing-pages/candidates-list-v3";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Candidates List V3 || Abroadium- Job Borad ReactJs Template',
  description:
    'Abroadium- Job Borad ReactJs Template',
  
}


const CandidateListPage3 = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      
      <CandidatesList />
    </>
  );
};

export default CandidateListPage3
