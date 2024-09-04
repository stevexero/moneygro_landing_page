import useDeductionStore from '../stores/deductionStore';
import DeductionsCard from './DeductionsCard';
import AddDeductionButton from './AddDeductionButton';
import DeductionRenameModal from './DeductionRenameModal';
import ItemizedDeductions from './ItemizedDeductions';
import DeductionsSummary from './DeductionsSummary';

const Deductions: React.FC = () => {
  const deductionsHidden = useDeductionStore((state) => state.deductionsHidden);

  return (
    <>
      {deductionsHidden ? (
        <DeductionsSummary />
      ) : (
        <>
          <DeductionsCard />
          <AddDeductionButton />
          <ItemizedDeductions />
        </>
      )}
      <DeductionRenameModal />
    </>
  );
};

export default Deductions;
