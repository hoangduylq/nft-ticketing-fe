import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectorUser, updateIsBank } from 'app/user/userSlice';
import { useState, useEffect } from 'react';
import * as api from '../../api/index';
import ModalCreateBank from '../user/ModalCreateBank';
import EventDetail from './EventDetail';
// import EventDetail from './EventDetail';

const CreateEvent: React.FC = () => {
  const user = useAppSelector(selectorUser);
  const dispatch = useAppDispatch();

  const [isBankAccount, setIsBankAccount] = useState(false);

  const getBank = async (id: string) => {
    try {
      const result = await api.userApi.findBankByUserId(id);
      setIsBankAccount(!!result);
      dispatch(updateIsBank({ isBankAccount: !!result }));
    } catch (error) {
      dispatch(updateIsBank({ isBankAccount: false }));
    }
  };

  useEffect(() => {
    getBank(user.id);
  }, [user.id]);

  return (
    <>
      {!isBankAccount && <ModalCreateBank />}
      {isBankAccount && <EventDetail />}
    </>
  );
};

export default CreateEvent;
