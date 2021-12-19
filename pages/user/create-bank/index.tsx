import CreateBank from '@/components/user/CreateBank';
import { GetServerSideProps, NextPage } from 'next';
const CreateBankPage: NextPage = () => {
  return <CreateBank />;
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { req } = context;
  console.log(req);
  return {
    props: {},
  };
};

export default CreateBankPage;
