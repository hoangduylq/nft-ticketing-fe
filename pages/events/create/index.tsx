import CreateEvent from '@/components/event/CreateEvent';
import { NextPage } from 'next';
const CreatEventPage: NextPage = () => {
  return <CreateEvent />;
};

// export const getServerSideProps: GetServerSideProps = async (context: any) => {
//   const { req } = context;
//   console.log(req?.cookies);
//   return {
//     props: {},
//   };
// };

export default CreatEventPage;
