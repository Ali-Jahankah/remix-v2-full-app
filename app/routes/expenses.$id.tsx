import { useNavigate } from '@remix-run/react';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';
const SingleExpense = () => {
  const navigate = useNavigate();
  return (
    <Modal onClose={() => navigate('..')}>
      <ExpenseForm />
    </Modal>
  );
};

export default SingleExpense;
