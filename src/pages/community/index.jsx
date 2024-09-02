

import Community from "@/components/community";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Candidates List V1 || Abroadium- Job Borad ReactJs Template',
  description:
    'Abroadium- Job Borad ReactJs Template',
  
}


const Communitypage = () => {
  return (
    <>
      
    <MetaComponent meta={metadata} />
      <Community />
    </>
  );
};

export default Communitypage
